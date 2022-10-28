const accounts = require('../data/accounts');

async function getAccountsLimitTenThousand(pageSize, page){
    return accounts.getAccountsLimitTenThousand(pageSize, page);
}

async function isAccountLimitTenThousand(accountId){
    const account = accounts.getAccount(accountId);
    
    return account.limit == 10000;
}

module.exports = {getAccountsLimitTenThousand, isAccountLimitTenThousand}