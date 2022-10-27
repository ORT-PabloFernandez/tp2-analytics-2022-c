const conn = require("./conn");
const DATABASE = "sample_analytics";
const ACCOUNT = "accounts";
const LIMIT = 10000;

async function getAllAccounts(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const accounts = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNT)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return accounts;
}
async function getAccountsById(id) {
  const connection = await conn.getConnection();

  const account = await connection
    .db(DATABASE)
    .collection(ACCOUNT)
    .findOne({ account_id: id });

  return account;
}

async function getAccountsByLimit() {
  const connection = await conn.getConnection();
  const accounts = await connection
    .db(DATABASE)
    .collection(ACCOUNT)
    .find({})
    .toArray();

  const filter = accounts.filter((account) => account.limit == LIMIT);
  console.log(filter);
  return filter;
}

module.exports = { getAccountsByLimit, getAllAccounts, getAccountsById };
