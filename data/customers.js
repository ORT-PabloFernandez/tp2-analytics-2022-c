const { ObjectID } = require("bson");
const conn = require("./conn");
const DATABASE = "sample_analytics";
const CUSTOMERS = "customers";
const account = require("./accounts");
const transaction = require("./transactions");

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
  const connection = await conn.getConnection();

  const costumer = await connection
    .db(DATABASE)
    .collection(CUSTOMERS)
    .findOne({ email: email });
  console.log(costumer);
  return costumer;
}

async function getCostumerByAccounts() {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .toArray();
  const filter = customers.filter((customer) => customer.accounts.length >= 4);
  console.log(filter);
  console.log("ENTRO A DATA");
  return filter;
}

async function getCustomersAccounts() {
  const connection = await conn.getConnection();
  const customers = await connection
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({})
    .toArray();
  let array = [];
  await Promise.all(
    customers.map(async (customer) => {
      let tieneCuenta = false;
      let index = 0;
      while (!tieneCuenta && index < customer.accounts.length) {
        const accountLeida = await account.getAccountsById(
          customer.accounts[0]
        );
        // console.log(accountLeida.limit);
        if (accountLeida.limit == 10000) {
          tieneCuenta = true;
        } else {
          index = index + 1;
        }
      }
      if (tieneCuenta) {
        array.push(customer);
      }
    })
  );
  console.log(array);
  return array;
}

async function getCustomerTransactions(email) {
  const costumer = await getCustomerByEmail(email);
  console.log(costumer);
  let array = [];
  await Promise.all(
    await costumer.accounts.map(async (account) => {
      console.log(account);
      array.push(await transaction.getTransactionByAccountId(account));
    })
  );

  return array;
}

module.exports = {
  getAllCustomers,
  getCustomerByEmail,
  getCostumerByAccounts,
  getCustomersAccounts,
  getCustomerTransactions,
};
