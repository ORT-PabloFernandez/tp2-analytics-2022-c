const conn = require("./conn");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";
const ACCOUNTS = "accounts";

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

async function getCustomerId(id) {
  const connectiondb1 = await conn.getConnection();
  const customerId = await connectiondb1
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ _id: new objectId(id) })
    .toArray();
  console.log(customerId);
  return customerId;
}

async function getCustomerEmail(emailValue) {
  const connectiondb = await conn.getConnection();
  const customerEmail = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .findOne({ email: emailValue });
  return customerEmail;
}

async function getCustomersFourAccounts(size) {
  const connectiondb = await conn.getConnection();
  const customersAccounts = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ accounts: { $size: size } })
    .toArray();
  return customersAccounts;
}

async function getCustomersWithAccountLimit() {
  const customersAccounts = await getCustomersFourAccounts(4);

  const customerLimit = customersAccounts.map(() => {});

  return customerLimit;
}

module.exports = {
  getAllCustomers,
  getCustomerId,
  getCustomerEmail,
  getCustomersFourAccounts,
  getCustomersWithAccountLimit,
};
