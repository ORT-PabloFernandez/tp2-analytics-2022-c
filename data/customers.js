const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUSTOMERS = 'customers';

async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return customers;
}


async function getCustomerPorEmail(email){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({email:email})
                        .toArray();    
    return customers;
}



async function getCustomerCuatroCuentas(cantCuentas){
    const customers = await getAllCustomers(0, 0);
    const cuenta = customers.filter(
        (cuatrocuentas) => cuatrocuentas.accounts.lenght >= cantCuentas
    );
      return cuenta;
}



module.exports = {getAllCustomers, getCustomerPorEmail,getCustomerCuatroCuentas};