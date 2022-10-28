const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUSTOMERS = 'customers';
const ACCOUNTS = 'accounts';
const LIMITE= 10000;
const CLIENTE = "Christopher Watson"; 
const TRANSACTIONS = "transactions"; 
async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return customers;
}
async function getAccounts(pageSize, page){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
                        .db(DATABASE)
                        .collection(ACCOUNTS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return accounts;
}


// Necesitamos un punto final que nos devuelva un cliente ( customer ) particular por correo electrónico

async function getClienteEmail(email){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
            .db(DATABASE)
            .collection(CUSTOMERS)
            .find({email : { $eq: email}})
            .toArray();
    return customer; 

}

// Necesitamos un punto final que retorne a los clientes que tengan al menos 4 cuentas ( cuentas )

async function getClientesCuentas() {
    const connectiondb = await conn.getConnection(); 
    const customer = await connectiondb
          .db(DATABASE)
          .collection(CUSTOMERS)
          .find({accounts : {$gte: 4}})
          .toArray(); 

    return customer; 
}

// De la otra colección de cuentas necesitamos conocer las cuentas que tienen un límite de 10.000
async function cuentasConLimite(){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
          .db(DATABASE)
          .collection(ACCOUNTS)
          .find({limit : { $eq: LIMITE}})
          .toArray();

    return accounts;
}

// Necesitamos un listado de los clientes que tienen una cuenta con 10.000 de limite
async function clientesConLimite(){
    const connectiondb = await conn.getConnection();
    const accounts = await connectiondb
          .db(DATABASE)
          .collection(ACCOUNTS)
          .find({})
          .toArray(); 
    
    const cuentaLimite = accounts.filter((cuenta) => cuenta.accounts === LIMITE);
   
    const idsCuentaLimite = cuentaLimite.map((cuenta) =>({
        id: cuenta.id
    })); 

    const clientes = getClientesCuentas(); 
    const final = clientes.filter((cliente) => {
        cliente.id === idsCuentaLimite.find((id) => id === cliente.id)
    }); 
        
}

// Necesitamos conocer todas las transacciones que realizó el cliente:
// Christopher Watson en todas sus cuentas

async function transaccionesClienteByNombre() {
    const connectiondb = await conn.getConnection(); 
    const cliente = await connectiondb
          .db(DATABASE)
          .collection(CUSTOMERS)
          .find({name : CLIENTE})
          .toArray(); 
    
    const transacciones = await connectiondb
          .db(DATABASE)
          .collection(TRANSACTIONS)
          .find({ _id : Object(cliente.id)})
          .toArray(); 
   
    return transacciones; 

}

module.exports = {
    getAllCustomers,
    getAccounts,
    getClienteEmail,
    getClientesCuentas,
    cuentasConLimite,
    clientesConLimite,
    transaccionesClienteByNombre, 
};