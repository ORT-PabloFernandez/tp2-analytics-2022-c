const accounts = require("../data/accounts");

async function getAllAccounts(pageSize, page) {
  return accounts.getAllAccounts(pageSize, page);
}

async function getAllLimitedAccounts() {
  return accounts.getAllLimitedAccounts();
}

module.exports = {
  getAllAccounts,
  getAllLimitedAccounts,
};
