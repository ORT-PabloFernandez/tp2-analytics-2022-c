const express = require('express');
const router = express.Router();
const controller = require('../controllers/accounts');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllAccounts(pageSize, page));
});

router.get('/accountLimit10000', async (req,res)=>{
    res.json(await controller.getAccountLimit10000());
});

router.get('/getAccountByAccountId/:account_id', async (req,res)=>{
    const id = req.params.account_id;
    res.json(await controller.getAccountByAccountId(id));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getAccount(req.params.id));
});


module.exports = router;