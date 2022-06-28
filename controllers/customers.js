const movies = require('../data/customers');

async function getAllCustomers(pageSize, page){    
    return movies.getAllCustomers(pageSize, page);
}

module.exports = {getAllCustomers};