const movies = require('../data/customers');
const { all } = require('../routes/customers');

async function getAllCustomers(pageSize, page){    
    return movies.getAllCustomers(pageSize, page);
}

async function getAllAccounts(pageSize, page){    
    return movies.getAllAccounts(pageSize, page);
}

async function getAllCustomers(pageSize, page){    
    return movies.getAllCustomers(pageSize, page);
}

async function getCustomerByEmail(pageSize, page, email){
    let allcustomers = await movies.getAllCustomers(pageSize, page)
    let customer = allcustomers.find(c => c.email = email)
    
    return customer
}

async function customersAccount(pageSize, page){
    let allcustomers = await movies.getAllCustomers(pageSize, page)
    let customer = allcustomers.filter(c => c.accounts.length >= 4)

    return customer
} 

async function accountLimit(pageSize, page){
    let allAccounts = await movies.getAllAccounts(pageSize, page)
    let accounts = allAccounts.filter(a => a.limit = 10000)

    return accounts
} 

async function customersAccount10000(pageSize, page){
    let allCustomers = await movies.getAllCustomers(pageSize, page)
    let accountLimit = await accountLimit(pageSize, page)
    let customers = allCustomers.filter(m => {
        if(m.accounts != undefined){
            let coincide
            m.accountLimit.forEach(a => {a.account_id == m.accounts ? coincide = m : ""});
            return coincide;
        }
    });
    return customers
}

module.exports = {getAllCustomers, getCustomerByEmail, customersAccount, getAllAccounts, accountLimit, customersAccount10000};