const accounts = require("../data/accounts");

async function getAllAccounts(pageSize, page) {
  return accounts.getAllAccounts(pageSize, page);
}
getAllAccounts;

async function getAccountsByLimit() {
  return await accounts.getAccountsByLimit();
}

module.exports = {
  getAccountsByLimit,
  getAllAccounts,
};
