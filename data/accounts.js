const conn = require("./conn");
const DATABASE = "sample_analytics";
const ACCOUNTS = "accounts";

async function getAllAccounts(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const accounts = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNTS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return accounts;
}

async function getAccountById(id) {
  const connectiondb = await conn.getConnection();
  const account = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ account_id: id })
    .toArray();
  return account;
}

async function getAllAccountsWithLimit() {
  const connectiondb = await conn.getConnection();
  const accounts = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNTS)
    .find({})
    .toArray();

  let accountsFiltered = accounts.filter((a) => a.limit === 10000);

  return accountsFiltered;
}

module.exports = { getAllAccounts, getAllAccountsWithLimit, getAccountById };
