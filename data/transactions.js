const conn = require("./conn");
const DATABASE = "sample_analytics";
const TRANSACTIONS = "transactions";

async function getAllTransactionsByAcounts(acounts) {
  const ids = acounts.map((item) => item);

  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(TRANSACTIONS)
    .find({ account_id: { $in: ids } })
    .toArray();

  const allTransactions = customers.flatMap((item) => item.transactions);
  return allTransactions;
}

module.exports = {
  getAllTransactionsByAcounts,
};
