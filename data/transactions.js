const { ObjectId } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_analytics";
const TRANSACTIONS = "transactions";

async function getAllTransactions(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(TRANSACTIONS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return customers;
}

async function getTransactionByaccountID(account_id){
  const connectiondb = await conn.getConnection();
  const transaction = await connectiondb
    .db(DATABASE)
    .collection(TRANSACTIONS)
    .findOne({ account_id: account_id});
  return transaction;
}

module.exports = {
    getAllTransactions,
    getTransactionByaccountID
}