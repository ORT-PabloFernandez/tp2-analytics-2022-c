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

async function getAllCustomersAccountLimit10000(){
  return customers.getAllCustomersAccountLimit10000();
}
module.exports = { getAllCustomers, getCustomer, getCustomerByEmail, getAllCustomersWminAccounts, getAllCustomersAccountLimit10000 };
