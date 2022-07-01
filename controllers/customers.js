const movies = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return movies.getAllCustomers(pageSize, page);
}

async function getCustomerEmail(email) {
  return movies.getCustomerEmail(email);
}

async function getCustomersFourAccounts(pageSize, page) {
  return movies.getCustomersFourAccounts(pageSize, page);
}

async function getCustomersWithLimit(priceLimit, pageSize, page) {
  return movies.getCustomersWithLimit(priceLimit, pageSize, page);
}

module.exports = {
  getAllCustomers,
  getCustomerEmail,
  getCustomersFourAccounts,
  getCustomersWithLimit,
};
