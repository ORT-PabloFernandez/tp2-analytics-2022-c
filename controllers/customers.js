const movies = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return movies.getAllCustomers(pageSize, page);
}


async function getCustomerPorEmail(email){{
    return movies.getCustomerPorEmail(email);
}}

async function getCustomersCuatroCuentas(cantcuentas){
    return movies.getCustomerCuatroCuentas(cantcuentas);
} 


module.exports = {getAllCustomers,getCustomerPorEmail,getCustomersCuatroCuentas};