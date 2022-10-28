const customers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return customers.getAllCustomers(pageSize, page);
}

async function getCustomersByMail(email) {
  return customers.getCustomersByMail(email);
}

async function getCustomersAcountsM4() {
  return customers.getCustomersAcountsM4();
}

async function getCustomersAcounts10k() {
  return customers.getCustomersAcounts10k();
}

async function getCustomerTransaction(name) {
  return customers.getCustomerTransaction(name);
}
module.exports = {
  getAllCustomers,
  getCustomersByMail,
  getCustomersAcountsM4,
  getCustomersAcounts10k,
  getCustomerTransaction,
};
