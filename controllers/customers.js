const costumers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return costumers.getAllCustomers(pageSize, page);
}

async function getCustomerByEmail(email) {
  return await costumers.getCustomerByEmail(email);
}

async function getCostumerByAccounts() {
  console.log("ENTRO A CUSTOMER");
  return await costumers.getCostumerByAccounts();
}
async function getCustomersAccounts() {
  return await costumers.getCustomersAccounts();
}

async function getCustomerTransactions(id) {
  return await costumers.getCustomerTransactions(id);
}

module.exports = {
  getAllCustomers,
  getCustomerByEmail,
  getCostumerByAccounts,
  getCustomersAccounts,
  getCustomerTransactions,
};
