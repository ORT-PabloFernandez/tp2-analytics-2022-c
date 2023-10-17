const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactions');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllTransactions(pageSize, page));
});

router.get('/transactionByAccountId/:account_id', async (req, res)=>{
    res.json(await controller.getTransactionByAccountId(req.params.account_id));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getTransaction(req.params.id));
});

router.get('/customerTransactionsByName/:name', async (req, res)=>{
    res.json(await controller.getCustomerTransactionsByName(req.params.name));
});


module.exports = router;