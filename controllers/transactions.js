const transactions = require('../data/transactions');

async function getTransactionByAccount(accountId){    
    return transactions.getTransactionByAccount(accountId);
}

module.exports = {getTransactionByAccount}