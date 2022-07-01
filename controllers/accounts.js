const movies = require('../data/accounts');
const { all } = require('../routes/accounts');

async function getAllAccounts(pageSize, page){    
    return movies.getAllAccounts(pageSize, page);
}

module.exports = {getAllAccounts};