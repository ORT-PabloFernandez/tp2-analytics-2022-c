const accounts = require("../data/accounts");

async function getAllAccounts(pageSize, page) {
  return accounts.getAllAccounts(pageSize, page);
}

async function getAccountsLimit(limit, pageSize, page) {
  return accounts.getAccountsLimit(limit, pageSize, page);
}

module.exports = {
  getAllAccounts,
  getAccountsLimit,
};
