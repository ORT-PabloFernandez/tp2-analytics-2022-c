const { response } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllCustomers(pageSize, page));
});

router.get('/:email', async (req, res) => {
    
    const customer = await controller.getCustomerPorEmail(req.params.email);
    res.json(customer);
});

router.get('/cuatrocuentas/:cantCuatroCuentas', async (req, res) => {
    const customerCuatroCuentas = await controller.getCustomersCuatroCuentas(req.params.cantCuatroCuentas);
    res.json(customerCuatroCuentas)

});

module.exports = router;