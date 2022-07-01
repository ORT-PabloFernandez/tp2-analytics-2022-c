const accounts = require('../data/accounts');

async function getAllAccounts(pageSize, page){    
    return accounts.getAllAccounts(pageSize, page);
}

async function getCuentasPorDiezMil(limit){{
    return accounts.getCuentasPorDiezMil(limit);
}}

module.exports = {getAllAccounts,getCuentasPorDiezMil};