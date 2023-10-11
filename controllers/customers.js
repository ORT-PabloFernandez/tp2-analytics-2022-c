const customers = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return customers.getAllCustomers(pageSize, page);
}

async function getCustomer(id){
    return customers.getCustomer(id);
}

module.exports = {getAllCustomers, getCustomer};