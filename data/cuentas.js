const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUENTAS = 'accounts';

async function getAllAccounts(pageSize, page) {
    const connectiondb = await conn.getConnectionAc();
    const cuentas = await connectiondb
                    .db(DATABASE)
                    .collection(CUENTAS)
                    .find({})
                    .limit(pageSize).skip(pageSize * page)
                    .toArray();
    return cuentas;
  }

  async function getCuentas() {
    const connectiondb = await conn.getConnectionAc();
    const cuentas = await connectiondb
                    .db(DATABASE)
                    .collection(CUENTAS)
                    .find()
                    .toArray();
    return cuentas;
  }

  module.exports = {getAllAccounts,getCuentas};