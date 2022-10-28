const customers = require('../data/customers');
const accounts = require('./accounts');
const transactions = require('./transactions');

async function getAllCustomers(pageSize, page){    
    return customers.getAllCustomers(pageSize, page);
}

async function getCustomerByEmail(email){
    return customers.getCustomerByEmail(email);
}

async function getCustomersAmountAccounts(pageSize, page, amount){
    return customers.getCustomersAmountAccounts(pageSize, page, amount);
}

async function getCustomersWithAccountLimitTenThousand(pageSize, page){
    const allCustomers = await customers.getAllCustomers(pageSize, page);

    return allCustomers.filter(async customer => {
        customer.accounts.some(async account => await accounts.isAccountLimitTenThousand(account))
    });
}

async function getTransactionsByCustomer(id){
    const customer = await customers.getCustomer(id);
    
    return await Promise.all(customer.accounts.map(async account => await transactions.getTransactionByAccount(account)))
}

module.exports = {
    getAllCustomers,
    getCustomerByEmail,
    getCustomersAmountAccounts,
    getCustomersWithAccountLimitTenThousand,
    getTransactionsByCustomer
};