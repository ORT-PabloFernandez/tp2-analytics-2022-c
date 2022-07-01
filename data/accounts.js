const conn = require('./conn');
const DATABASE = 'sample_analytics';
const ACCOUNTS = 'accounts';


async function getAllAccounts(pageSize, page){
    const connectiondb = await conn.getConnection();
    
    const cuentas = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return cuentas;
}

async function AllAccounts(){
    const connectiondb = await conn.getConnection();
    const cuentas = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({})
                        .toArray();    
    return cuentas;
}


async function getForLimit() {


    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({})
                        .toArray();


return accounts.filter(accounts => accounts.limit == 10000);



}


async function getCustomerWhitLimit() {

    
    const connectiondb = await conn.getConnection();

    

    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({})
                        .toArray();


return accounts.filter(accounts => accounts.limit == 10000);



}

module.exports = {getAllAccounts,AllAccounts,getCustomerWhitLimit,getForLimit};