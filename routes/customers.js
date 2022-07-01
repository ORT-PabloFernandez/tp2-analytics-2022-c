const { response } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllCustomers(pageSize, page));
});

router.get('/getCustumerXmail/:email', async (req, res)=> {
    const userEmail = await controller.getCustumerXmail(req.params.email)
    res.json(userEmail)
});

router.get('/getMasCuentas/',async (req, res)=> {
    
    const userCuentas = await controller.getCuentas()
    res.json(userCuentas)
})



module.exports = router;