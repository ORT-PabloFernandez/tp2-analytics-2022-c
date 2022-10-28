const conn = require("./conn");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";
const accounts = require("./accounts");
const transactions = require("./transactions");

async function getAllCustomers(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return customer;
}

async function getCustomersByMail(email) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ email: email })
    .toArray();
  return customers;
}

async function getCustomersAcountsM4() {
  const connectiondb = await conn.getConnection();

  const customersAcountsM4 = [];

  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .toArray();

  for (let index = 0; index < customers.length; index++) {
    if (customers[index].accounts.length > 4) {
      customersAcountsM4.push(customers[index]);
    }
  }

  return customersAcountsM4;
}

async function getCustomersAcounts10k() {
  const connectiondb = await conn.getConnection();
  const accounts10k = await accounts.getAccounts10k();
  const customersAcounts10k = [];

  for (let index = 0; index < accounts10k.length; index++) {
    const customer = await connectiondb
      .db(DATABASE)
      .collection(CUSTOMERS)
      .find({ accounts: { $in: [accounts10k[index].account_id] } })
      .toArray();
    customersAcounts10k.push(customer);
    console.log(customer);
  }

  return customersAcounts10k;
}

async function getCustomerTransaction(value) {
  const connectiondb = await conn.getConnection();
  const resultado = [];

  const customer = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ name: value })
    .toArray();

  for (let index = 0; index < customer[0].accounts.length; index++) {
    const trasAcount = await transactions.getTransactionsByAcount(
      customer[0].accounts[index]
    );

    for (let index1 = 0; index1 < trasAcount.length; index1++) {
      resultado.push(trasAcount[index1]);
    }
  }

  return customer;
}
module.exports = {
  getAllCustomers,
  getCustomersByMail,
  getCustomersAcountsM4,
  getCustomersAcounts10k,
  getCustomerTransaction,
};
