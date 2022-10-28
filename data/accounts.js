const conn = require('./conn');
const DATABASE = 'sample_analytics';
const ACCOUNTS = 'accounts';

async function getAccountsLimitTenThousand(pageSize, page){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({limit: 10000}).limit(pageSize).skip(pageSize * page)
                        .toArray();
    
    return accounts;
}

async function getAccount(accountId){
    const connectiondb = await conn.getConnection();
    const account = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .findOne({account_id: accountId});
    
    return account;
}

module.exports = {getAccountsLimitTenThousand, getAccount}