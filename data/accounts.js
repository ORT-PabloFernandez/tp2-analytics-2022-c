const conn = require("./conn");
const DATABASE = "sample_analytics";
const ACCOUNTS = "accounts";

async function getAllAccounts(pageSize = 0, page = 0) {
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

async function getAllLimitedAccounts() {
  const accounts = await getAllAccounts();
  const limitAmount = 10000;
  const accountsOk = accounts.filter((a) => a.limit == limitAmount);
  return accountsOk;
}

module.exports = {
  getAllAccounts,
  getAllLimitedAccounts,
};
