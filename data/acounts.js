const conn = require("./conn");
const DATABASE = "sample_analytics";
const ACCOUNTS = "accounts";

async function getAcountByLimit(limite) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNTS)
    .find({ limit: { $eq: limite } })
    .toArray();
  return customers;
}

module.exports = { getAcountByLimit };
