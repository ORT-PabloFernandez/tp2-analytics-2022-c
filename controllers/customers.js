const customers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return customers.getAllCustomers(pageSize, page);
}

async function getCustomerId(id) {
  return customers.getCustomerId(id);
}

async function getCustomerEmail(email) {
  return customers.getCustomerEmail(email);
}

async function getCustomersFourAccounts(size) {
  return customers.getCustomersFourAccounts(size);
}

async function getCustomersWithAccountLimit() {
  return customers.getCustomersWithAccountLimit();
}

module.exports = {
  getAllCustomers,
  getCustomerId,
  getCustomerEmail,
  getCustomersFourAccounts,
  getCustomersWithAccountLimit,
};
