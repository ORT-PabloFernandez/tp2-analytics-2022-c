const customer = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return customer.getAllCustomers(pageSize, page);
}

async function getCustomerByEmail(email){    
    return customer.getCustomerByEmail(email);
}

async function getCustomerByName(name){    
    return customer.getCustomerByName(name);
}

async function getCustomerIfAccounts(){    
    return customer.getCustomerIfAccounts();
}

module.exports = {
    getAllCustomers,
    getCustomerByEmail,
    getCustomerIfAccounts,
    getCustomerByName,
};