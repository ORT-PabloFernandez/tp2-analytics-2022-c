const conn = require("./conn");
const DATABASE = "sample_analytics";
const TRANSACTION = "transactions";

async function getTransactionsByAcount(account) {
  const connectiondb = await conn.getConnection();
  const transactions = await connectiondb
    .db(DATABASE)
    .collection(TRANSACTION)
    .find({ account_id: { $eq: account } })
    .toArray();

  return transactions;
}

module.exports = { getTransactionsByAcount };
