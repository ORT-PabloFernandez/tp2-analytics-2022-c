const conn = require("./conn");
const dataAccounts = require("./accounts");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";

async function getAllCustomers(pageSize, page) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray();
  return customers;
}

async function getCustomerByEmail(email) {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ email: email })
    .toArray();
  return customer;
}

async function getCustomerWithFourAccounts() {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .toArray();

  let customersFilter = customers.filter((c) => c.accounts.length >= 4);
  return customersFilter;
}

async function getCustomerWithLimit() {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .toArray();
  let customersFilter = [];
  let accountsWithLimit = await dataAccounts.getAllAccountsWithLimit();

  let index = 0;
  while (index < customers.length) {
    let customer = customers[index];
    let index2 = 0;
    do {
      let index3 = 0;
      let account = customer.accounts[index2];
      let tieneCuentaConLimite = false;
      do {
        let account2 = accountsWithLimit[index3].account_id;

        if (account == account2) {
          customersFilter.push(customer);
          accountsWithLimit = accountsWithLimit.filter(
            (aw) => aw.account_id != accountsWithLimit[index3].account_id
          );
          tieneCuentaConLimite = true;
        }
        index3++;
      } while (index3 < accountsWithLimit.length && !tieneCuentaConLimite);

      index2++;
    } while (index2 < customer.accounts.lenght);

    index++;
  }

  return customersFilter;
}

module.exports = {
  getAllCustomers,
  getCustomerByEmail,
  getCustomerWithFourAccounts,
  getCustomerWithLimit,
};
