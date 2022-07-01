const customers = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return customers.getAllCustomers(pageSize, page);
}

async function getForEmail(email){    
    return customers.getForEmail(email);
}

async function getMoreFourAccounts(){

    return customers.getMoreFourAccounts();

}


module.exports = {getAllCustomers,getForEmail,getMoreFourAccounts};