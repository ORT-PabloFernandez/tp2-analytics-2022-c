const costumers = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return costumers.getAllCustomers(pageSize, page);
}

async function getCustomerById(id) {
  return await costumers.getCustomerById(id);
}

async function getCostumerByAccounts() {
  console.log("ENTRO A CUSTOMER");
  return await costumers.getCostumerByAccounts();
}
async function getCustomersAccounts() {
  return await costumers.getCustomersAccounts();
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  getCostumerByAccounts,
  getCustomersAccounts,
};
