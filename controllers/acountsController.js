const acounts = require("../data/acounts");

async function getAcountByLimit(limit) {
  return acounts.getAcountByLimit(limit);
}

module.exports = { getAcountByLimit };
