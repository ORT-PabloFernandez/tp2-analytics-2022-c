const customers = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return customers.getAllCustomers(pageSize, page);
}

async function getAllAccounts(pageSize, page){    
    return customers.getAllAccounts(pageSize, page);
}

async function getAllTransactions(pageSize, page){    
    return customers.getAllTransactions(pageSize, page);
}

async function getCustomerByEmail(email){
    return customers.getCustomerByEmail(email);
}

async function getCustomersByNAccounts(pageSize, page){    
    return customers.getCustomersByNAccounts(pageSize, page);
}

async function getAccountsByLimit(pageSize, page){    
    return customers.getAccountsByLimit(pageSize, page);
}

async function getCustomersByAccountLimit(pageSize, page){    
    return customers.getCustomersByAccountLimit(pageSize, page);
}

async function getCustomersByAccountLimit(pageSize, page){    
    return customers.getCustomersByAccountLimit(pageSize, page);
}

async function getTransactionsByCustomer(pageSize, page){    
    return customers.getTransactionsByCustomer(pageSize, page);
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