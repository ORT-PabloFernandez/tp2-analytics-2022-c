const accounts = require("../data/accounts");

async function getAllAccounts(pageSize, page) {
  return accounts.getAllAccounts(pageSize, page);
}
async function getAccountsLimit(size) {
  return accounts.getAccountsLimit(size);
}

module.exports = { getAllAccounts, getAccountsLimit };
