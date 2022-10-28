const customers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return customers.getAllCustomers(pageSize, page);
}

async function getCustomerByEmail(email) {
  return customers.getCustomerByEmail(email);
}

async function getCustomerWithFourAccounts() {
  return customers.getCustomerWithFourAccounts();
}

async function getCustomerWithLimit() {
  return customers.getCustomerWithLimit();
}

module.exports = {
  getAllCustomers,
  getCustomerByEmail,
  getCustomerWithFourAccounts,
  getCustomerWithLimit,
};
