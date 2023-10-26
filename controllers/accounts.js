const accounts = require("../data/accounts");

async function getAllAccounts(pageSize, page) {
  return accounts.getAllAccounts(pageSize, page);
}

async function getAccount(id) {
  return accounts.getAccount(id);
}

async function getAccountWLimit() {
  return accounts.getAccountWLimit();
}

async function getAccountByAccountID(acc_id) {
  return accounts.getAccountByAccountID(acc_id);
}
module.exports = { getAllAccounts, getAccount, getAccountWLimit , getAccountByAccountID };
