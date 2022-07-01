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
};



async function getCustumerXmail(mail){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                            .db(DATABASE)
                            .collection(CUSTOMERS)
                            .find({email: mail})
                            .toArray();

                            return customer
                            
};

 async function getCuentas(){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                            .db(DATABASE)
                            .collection(CUSTOMERS)
                            .find({accounts:{$size: 4}})
                            .toArray();

                            return customer
                            
};

module.exports = {getAllCustomers,getCustumerXmail,getCuentas};