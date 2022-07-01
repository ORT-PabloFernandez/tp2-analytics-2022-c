const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_analytics';
const ACCOUNTS = 'accounts';

async function getAllAccounts(pageSize, page){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return accounts;
}

async function getCuentasPorDiezMil(limit){
    const connectiondb = await conn.getConnection();
    const cuentas = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({limit:parseInt(limit)})
                        .toArray();    
    return cuentas;
}


module.exports = {getAllAccounts,getCuentasPorDiezMil}