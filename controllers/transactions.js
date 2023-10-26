const transactions = require("../data/transactions");

async function getAllTransactions(pageSize, page) {
  return transactions.getAllTransactions(pageSize, page);
}

async function getTransactionByaccountID(acc_id) {
  return transactions.getTransactionByaccountID(acc_id);
}
module.exports = {
  getAllTransactions,
  getTransactionByaccountID
};
