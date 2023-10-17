const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUSTOMERS = 'customers';
const ACCOUNTS = 'accounts';

async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return customers;
}

async function getCustomer(id){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .findOne({_id:new ObjectId(id)});    
    return customer;
}
//http://localhost:3000/api/customers/searchEmail?email=amyholland@yahoo.com
async function getCustomerByEmail(email){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .findOne({email});
    return customer;
}

async function getCustomer4AccountsOrMore(){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({$expr: { $gt: [{ $size: '$accounts' }, 4] }})
                        .toArray(); 
    return customer;
}

async function getCustomersAccountLimit10000(){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({limit:10000})
                        .toArray();
    const idAccounts = accounts.map(account=> account.account_id);
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({accounts:{$in:idAccounts}})
                        .toArray(); 
    return customer;
}

module.exports = {getAllCustomers, getCustomer, getCustomerByEmail,getCustomer4AccountsOrMore, getCustomersAccountLimit10000};