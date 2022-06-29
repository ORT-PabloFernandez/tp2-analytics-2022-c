const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUSTOMERS = 'customers';

async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return customers;
}

async function getCustomerByEmail(email){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({ email: email })
                        .toArray();
    return customers;
}

async function getCustomerByName(name){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({ name: name })
                        .toArray();
    return customers;
}

async function getCustomerIfAccounts(){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({})
                        .toArray();
    return customers.filter(customer => customer.accounts.length >= 4);
}

module.exports = {
    getAllCustomers,
    getCustomerByEmail,
    getCustomerIfAccounts,
    getCustomerByName,
};