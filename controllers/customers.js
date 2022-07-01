const movies = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return movies.getAllCustomers(pageSize, page);
}


async function getCustumerXmail(mail){
    let user = await movies.getCustumerXmail(mail);
    let userXmail = user.filter(u => u.email === mail);
    return userXmail
}

async function getCuentas(){
    let users = await movies.getCuentas();
    
    return users
}


module.exports = {getAllCustomers,getCustumerXmail, getCuentas};