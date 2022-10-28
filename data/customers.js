const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUSTOMERS = 'customers';
const ACCOUNTS = 'accounts';
const TRANSACTIONS = 'transactions';

async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return customers;
}

async function getAllAccounts(pageSize, page){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return accounts;
}

async function getAllTransactions(pageSize, page){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(TRANSACTIONS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return accounts;
}

async function getCustomerByEmail(email){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({ "email": { $eq: email}})
                        .toArray();    
    return customer;
}

async function getCustomersByName(name){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({ "name": { $eq: name}})
                        .toArray();    
    return customers;
}

async function getCustomersByNAccounts(pageSize, page){
    const customers = await getAllCustomers(pageSize, page);
    const resultado = [];

    for(let index = 0; index < customers.length; index++){
        if(customers[index].accounts.length >= 4){
            resultado.push(customers[index]);
        }
    }

    return resultado;
}

async function getAccountsByLimit(pageSize, page){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({ limit: {$eq: 10000} }).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return accounts;
}

async function getCustomersByAccountLimit(pageSize, page){
    const accounts = await getAccountsByLimit(pageSize, page);  
    const customers = await getAllCustomers(pageSize, page);
    const resultado = [];

    for(let index = 0; index < accounts.length; index++) {
        let indexCustomer = 0;
        let encontroCuenta = false;

        while(indexCustomer < customers.length && !encontroCuenta) {
            if(accountInCustomer(customers[indexCustomer].accounts, accounts[index].account_id)){
                resultado.push(customers[indexCustomer]);
                encontroCuenta = true;
            }
            indexCustomer++;
        }
    }

    return resultado;
}

async function getTransactionsByCustomer(pageSize, page){
    const transactions = await getAllTransactions(pageSize, page);
    const customersByName = await getCustomersByName("Christopher Watson");
    const resultado = [];

    for(let index = 0; index < transactions.length; index++) {
        let encontroCuenta = false;
        let indexCustomer = 0;

        while(indexCustomer < customersByName.length && !encontroCuenta){
            if(accountInCustomer(customersByName[indexCustomer].accounts, transactions[index].account_id)){
                resultado.push(transactions[index]);
                encontroCuenta = true;
            }
            indexCustomer++;
        }
    }
    return resultado;
}

function accountInCustomer(accounts, account_id){
    let resultado = false;
    let index = 0;

    while(index < accounts.length && !resultado){
        if(accounts[index] == account_id){
            resultado = true;
        }
        index++;
    }

    return resultado;
}

module.exports = {
    getAllCustomers,
    getAllAccounts,
    getAllTransactions,
    getCustomerByEmail,
    getCustomersByNAccounts,
    getAccountsByLimit,
    getCustomersByAccountLimit,
    getTransactionsByCustomer
};