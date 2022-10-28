const conn = require("./conn");
const DATABASE = "sample_analytics";
const ACCOUNTS = "accounts";

async function getAccounts10k() {
  const connectiondb = await conn.getConnection();
  const accounts10k = await connectiondb
    .db(DATABASE)
    .collection(ACCOUNTS)
    .find({ limit: { $eq: 10000 } })
    .toArray();

  return accounts10k;
}

module.exports = { getAccounts10k };
