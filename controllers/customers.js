const movies = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return movies.getAllCustomers(pageSize, page);
}

async function getCustommerByEmail(email) {
  return movies.getCustommerByEmail(email);
}

async function moreAccountsThan(acountCount) {
  return movies.moreAccountsThan(acountCount);
}

module.exports = { getAllCustomers, getCustommerByEmail, moreAccountsThan };
