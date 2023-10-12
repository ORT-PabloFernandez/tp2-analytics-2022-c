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

async function getCustomer(id){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .findOne({_id:new ObjectId(id)});    
    return customer;
}

async function findCustomerByEmail(email){
    try {
        console.log("Buscando cliente con email:", email); // Log de depuración

        const connectiondb = await conn.getConnection();
        if (!connectiondb) {
            console.error("No se pudo establecer una conexión con la base de datos");
            return null;
        }

        const customer = await connectiondb
            .db(DATABASE)
            .collection(CUSTOMERS)
            .findOne({ email: email });

        if (!customer) {
            console.log("Cliente no encontrado para el email:", email); // Log de depuración
        }

        return customer;

    } catch (error) {
        console.error("Error al buscar el cliente por email:", error);
        throw error;
    }
}

module.exports = {getAllCustomers, getCustomer, findCustomerByEmail};