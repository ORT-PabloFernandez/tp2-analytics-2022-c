const conn = require("./conn");
const accController = require("../controllers/accounts");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";
const TRANSACTIONS = "transactions";

async function getAllCustomers(pageSize = 0, page = 0) {
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

async function getSingleCustomer(email) {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .findOne({ email: email });
  return customer;
}

async function getCustomersWithFourAccounts() {
  const customers = await getAllCustomers();
  const customersOk = customers.filter((c) => c.accounts.length >= 4);
  return customersOk;
}

async function getAllCustomersWithLimitedAccounts() {
  const customers = await getAllCustomers();
  const accounts = await accController.getAllAccounts();
  const limit = 10000;
  //const customersNeeded = [];
  let j = 0;
  let i = 0;
  const customersNeeded = customers.filter((c) =>
    c.accounts.forEach((ac) => {
      const account = accounts.find((acc) => acc.account_id == ac);
      if (account.limit == limit) {
        return c;
      }
    })
  );

  /*for (let i = 0; i < customers.length; i++) {
    customers[i].accounts.forEach((a) => {
      const searchedAccount = accounts.find((ac) => ac.account_id == a);
      if (searchedAccount != null || searchedAccount != undefined) {
        if (searchedAccount.limit == limit) {
          customersNeeded[j] = customers[i];
          j += 1;
        }
      }
    });
  }*/

  return customersNeeded.map((cn) => ({
    name: cn.name,
  }));
}

module.exports = {
  getAllCustomers,
  getSingleCustomer,
  getCustomersWithFourAccounts,
  getAllCustomersWithLimitedAccounts,
};
