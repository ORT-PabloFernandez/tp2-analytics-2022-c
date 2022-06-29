const customer = require('../data/accounts');

async function getAllAccounts(pageSize, page){    
    return customer.getAllAccounts(pageSize, page);
}

async function getAccountsWithLimit(){    
    return customer.getAccountsWithLimit();
}

module.exports = {
    getAllAccounts,
    getAccountsWithLimit,
}