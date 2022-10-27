const movies = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return movies.getAllCustomers(pageSize, page);
}

async function getCustommerByEmail(email) {
  return movies.getCustommerByEmail(email);
}

module.exports = { getAllCustomers, getCustommerByEmail };
