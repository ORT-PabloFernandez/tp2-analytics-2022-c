const transactions = require("../data/transactions");

async function getTransactionsByAcount(account) {
  return accounts.getTransactionsByAcount(account);
}

module.exports = { getTransactionsByAcount };
