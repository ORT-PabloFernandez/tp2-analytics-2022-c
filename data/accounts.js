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

async function getAccountsLimit(limit, pageSize, page) {
  const connectiondb = await conn.getConnection();
  const accounts = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNTS)
    .find({ limit: limit })
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  console.log("accounts", accounts);
  return accounts;
}

module.exports = {
  getAllAccounts,
  getAccountsLimit,
};
