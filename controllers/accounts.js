const movies = require("../data/accounts");

async function getAllAccounts(pageSize, page) {
  return movies.getAllAccounts(pageSize, page);
}

async function getAllAccountsWithLimit() {
  return movies.getAllAccountsWithLimit();
}

module.exports = { getAllAccounts, getAllAccountsWithLimit };
