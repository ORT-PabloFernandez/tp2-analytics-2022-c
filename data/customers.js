const { ObjectId } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";
const { getAccountWLimit } = require("../controllers/accounts");

async function getAllCustomers(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return customers;
}

async function getCustomer(id) {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .findOne({ _id: new ObjectId(id) });
  return customer;
}

async function getCustomerByEmail(email) {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb.db(DATABASE).collection(CUSTOMERS).findOne({ email: email });
  return customer;
}

async function getAllCustomersWminAccounts(minAccountCount) {
  const connectiondb = await conn.getConnection();
  try {
    const customer = await connectiondb
      .db(DATABASE)
      .collection(CUSTOMERS)
      .find({ $expr: { $gte: [{ $size: "$accounts" }, parseInt(minAccountCount)] } })
      .toArray();
    return customer;
  } catch (error) {
    console.error("No se encontraron clientes con cuentas:", error);
  }
}

async function getAllCustomersAccountLimit10000() {
  const connectiondb = await conn.getConnection();
  const accounts = await getAccountWLimit();
  const idAccounts = accounts.map((account) => account.account_id);
  const customer = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ accounts: { $in: idAccounts } })
    .toArray();
  return customer;
}

module.exports = {
  getAllCustomers,
  getCustomer,
  getCustomerByEmail,
  getAllCustomersWminAccounts,
  getAllCustomersAccountLimit10000,
};
