const conn = require('./conn');
const DATABASE = 'sample_analytics';
const TRANSACTIONS = 'transactions';

async function getTransactionByAccount(accountId){
    const connectiondb = await conn.getConnection();
    const transactions = await connectiondb
                        .db(DATABASE)
                        .collection(TRANSACTIONS)
                        .find({account_id: accountId})
                        .toArray();
    
    return transactions;
}

module.exports = {getTransactionByAccount}