const { ObjectId } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";
const { getAccountWLimit, getAccountByAccountID } = require("../controllers/accounts");
const { getTransactionByaccountID } = require("../controllers/transactions")

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

async function getCustomersByName(name) {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb.db(DATABASE).collection(CUSTOMERS).findOne({ name: name });
  return customer;
}

async function getCusterAccount(name) {
  const customer = await getCustomersByName(name);
  const accountsPromises = await customer.accounts.map((account) => getAccountByAccountID(account));
  // el PRMOISE lo que hace es esperar a que todas las request del await carguen.
  //si no usas esto cuando usas el map t epuede tirar nulo
  const accounts = await Promise.all(accountsPromises);
  const transactionsPromises = await accounts.map((account)=> getTransactionByaccountID(account.account_id));
  const transactions = await Promise.all(transactionsPromises);
  return transactions;
}

module.exports = {
  getAllCustomers,
  getCustomer,
  getCustomerByEmail,
  getAllCustomersWminAccounts,
  getAllCustomersAccountLimit10000,
  getCustomersByName,
  getCusterAccount,
};
