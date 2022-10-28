const customers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return customers.getAllCustomers(pageSize, page);
}

async function getSingleCustomer(email) {
  return customers.getSingleCustomer(email);
}

async function getCustomersWithFourAccounts() {
  return customers.getCustomersWithFourAccounts();
}

async function getAllCustomersWithLimitedAccounts() {
  return customers.getAllCustomersWithLimitedAccounts();
}

module.exports = {
  getAllCustomers,
  getSingleCustomer,
  getCustomersWithFourAccounts,
  getAllCustomersWithLimitedAccounts,
};
