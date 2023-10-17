const transactions = require('../data/transactions');

async function getAllTransactions(pageSize, page){    
    return transactions.getAllTransactions(pageSize, page);
}

async function getTransaction(id){
    return transactions.getTransaction(id);
}

async function getTransactionByAccountId(account_id){
    return transactions.getTransactionByAccountId(account_id);
}

async function getCustomerTransactionsByName(name){
    return transactions.getCustomerTransactionsByName(name);
}
module.exports = {
    getAllTransactions,
    getTransaction,
    getTransactionByAccountId,
    getCustomerTransactionsByName
};