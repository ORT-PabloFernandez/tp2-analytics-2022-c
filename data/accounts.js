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

async function getAccountsLimit(size) {
  const connectiondb = await conn.getConnection();
  const limitAccounts = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNTS)
    .find({ limit: size })
    .toArray();
  return limitAccounts;
}

module.exports = { getAllAccounts, getAccountsLimit };
