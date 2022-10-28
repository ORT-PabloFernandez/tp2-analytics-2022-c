const movies = require("../data/transactions");

async function getAllTransactionsByAcounts(acounts) {
  return movies.getAllTransactionsByAcounts(acounts);
}

module.exports = {
  getAllTransactionsByAcounts,
};
