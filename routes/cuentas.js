const { response } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/cuentas');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;
    
    res.json(await controller.getAllCuentas(pageSize, page));
});


router.get('/limiteMas', async(req,res)=>{
    const cuentas = await controller.getLimite()
    res.json(cuentas)
})
