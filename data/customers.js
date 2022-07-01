const { getAccountsLimit } = require("./accounts");
const conn = require("./conn");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";

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

async function getCustomerEmail(email) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ email: email })
    .toArray();
  return customers;
}

async function getCustomersFourAccounts(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ accounts: { $size: 4 } })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  console.log("CON 4", customers);
  return customers;
}

async function getCustomersWithLimit(limit, pageSize = 10, page = 1) {
  const listCountWithLimit = await getAccountsLimit(limit, pageSize, page);
  const accountsId = listCountWithLimit.map((account) => ({
    accoundId: account.account_id,
  }));
  const customers = await getAllCustomers(pageSize, page);
  console.log("LLEGO");

  const customersWithLimit = customers.filter((customer) => {
    // customer.accounts.some(account) => account === listCountWithLimit.some(count)=> count.account_id)
    for (const account of customer.accounts) {
      console.log("FOR?", limitCount);
      if (
        listCountWithLimit.account_id.some((account) => account === account)
      ) {
        return false;
      }
    }
  });

  return customersWithLimit;
}

module.exports = {
  getAllCustomers,
  getCustomerEmail,
  getCustomersFourAccounts,
  getCustomersWithLimit,
};
