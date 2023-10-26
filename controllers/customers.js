const customers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return customers.getAllCustomers(pageSize, page);
}

async function getCustomer(id) {
  return customers.getCustomer(id);
}

async function getCustomerByEmail(email) {
  return customers.getCustomerByEmail(email);
}

async function getAllCustomersWminAccounts(minAccountCount) {
  return customers.getAllCustomersWminAccounts(minAccountCount);
}

async function getAllCustomersAccountLimit10000() {
  return customers.getAllCustomersAccountLimit10000();
}

async function getCustomersByName(name) {
  return customers.getCustomersByName(name);
}

async function getCusterAccount(acc_id) {
  return customers.getCusterAccount(acc_id);
}

module.exports = {
  getAllCustomers,
  getCustomer,
  getCustomerByEmail,
  getAllCustomersWminAccounts,
  getAllCustomersAccountLimit10000,
  getCustomersByName,
  getCusterAccount,
};
