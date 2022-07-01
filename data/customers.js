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

async function getForEmail(email){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .findOne({email : email})    
    return customers;
}

async function getMoreFourAccounts() {

    const connectiondb = await conn.getConnection();
    const clientes = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({})
                        .toArray();


return clientes.filter(clientes => clientes.accounts.length >= 4);



}



module.exports = {getAllCustomers,getForEmail,getMoreFourAccounts};