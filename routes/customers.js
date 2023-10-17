const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllCustomers(pageSize, page));
});

router.get('/searchEmail', async (req, res)=>{
    const email = req.query.email;

    res.json(await controller.getCustomerByEmail(email));
});

router.get('/getCustomer4AccountsOrMore', async (req,res)=>{
    res.json(await controller.getCustomer4AccountsOrMore());
});

router.get('/getCustomersAccountLimit10000', async (req, res)=>{
    res.json(await controller.getCustomersAccountLimit10000());
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getCustomer(req.params.id));
});




module.exports = router;