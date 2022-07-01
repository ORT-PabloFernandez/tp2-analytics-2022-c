const movies = require('../data/cuentas');

async function getAllCuentas(pageSize, page){    
    return movies.getAllAccounts(pageSize, page);
}

async function getLimite(){    
    let cuenta = await movies.getCuentas();
    let cuentaLimite = cuenta.filter(c => u.limite === 10000);
    return cuentaLimite
    
}


module.exports = {getAllCuentas, getLimite};