const accounts = require("../data/accounts");

async function getAccounts10k() {
  return accounts.getAccounts10k();
}

module.exports = { getAccounts10k };
