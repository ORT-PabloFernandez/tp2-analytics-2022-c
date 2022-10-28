const { response } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const email = req.query.email

    if (email) {
        res.json(await controller.getCustomerByEmail(email));
    }
    else{
        res.json(await controller.getAllCustomers(pageSize, page));
    } 
});

router.get('/accounts', async (req, res) =>{
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    const amount = req.query.amount ? parseInt(req.query.amount) : 0;

    res.json(await controller.getCustomersAmountAccounts(pageSize, page, amount));
});

router.get('/accounts/limit/10000', async(req, res) =>{
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    res.json(await controller.getCustomersWithAccountLimitTenThousand(pageSize, page));
})

router.get('/:id/accounts/transactions', async(req, res)=>{
    const id = req.params.id;

    res.json(await controller.getTransactionsByCustomer(id));
})

module.exports = router;