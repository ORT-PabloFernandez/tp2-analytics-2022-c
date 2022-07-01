const accounts = require('../data/accounts');


async function getAllAccounts(pageSize, page){    
    return accounts.getAllAccounts(pageSize, page);
}

async function AllAccounts(){    
    return accounts.AllAccounts();
}


async function getForLimit(){    
    return accounts.getForLimit();
}

async function getCustomerWhitLimit(){

    return accounts.getCustomerWhitLimit();

}


module.exports = {getAllAccounts,AllAccounts,getCustomerWhitLimit,getForLimit};