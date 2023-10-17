const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_analytics';
const TRANSACTIONS = 'transactions';
const CUSTOMERS = 'customers';

async function getAllTransactions(pageSize, page){
    const connectiondb = await conn.getConnection();
    const transactions = await connectiondb
                        .db(DATABASE)
                        .collection(TRANSACTIONS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return transactions;
}

async function getTransaction(id){
    const connectiondb = await conn.getConnection();
    const transaction = await connectiondb
                        .db(DATABASE)
                        .collection(TRANSACTIONS)
                        .findOne({_id:new ObjectId(id)});    
    return transaction;
}

async function getTransactionByAccountId(account_id){
    const connectiondb = await conn.getConnection();
    const transaction = await connectiondb
                        .db(DATABASE)
                        .collection(TRANSACTIONS)
                        .findOne({account_id:Number(account_id)});    
    return transaction;
}

async function getCustomerTransactionsByName(name){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({name})
                        .toArray(); 
    
    const idAccounts = customers.flatMap(customer => customer.accounts);
   
    const transactionsOfAccount = await connectiondb
                        .db(DATABASE)
                        .collection(TRANSACTIONS)
                        .find({account_id:{$in:idAccounts}})
                        .toArray();
    
    return transactionsOfAccount;
}

module.exports = {   
    getAllTransactions, 
    getTransaction, 
    getTransactionByAccountId,
    getCustomerTransactionsByName
};