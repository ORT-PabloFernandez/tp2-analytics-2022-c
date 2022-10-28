const conn = require("./conn");
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

async function getCustommerByEmail(email) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ email: email })
    .toArray();
  return customers;
}

async function getCustommerByName(nombre) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ name: nombre })
    .toArray();
  return customers;
}

async function moreAccountsThan(number) {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ $expr: { $gte: [{ $size: "$accounts" }, number] } })
    .toArray();
  return customers;
}

async function getClientsByLimit(acounts) {
  // console.log("acounts ")
  const ids = acounts.map((item) => item.account_id);

  console.log("ids : ", ids);
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(CUSTOMERS)
    .find({ accounts: { $in: ids } })
    .toArray();
  return customers;
}

module.exports = {
  getAllCustomers,
  getCustommerByEmail,
  moreAccountsThan,
  getClientsByLimit,
  getCustommerByName,
};
