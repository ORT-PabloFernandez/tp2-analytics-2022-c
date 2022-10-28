const express = require('express');
const router = express.Router();
const controller = require('../controllers/accounts');

router.get('/limitOneThousand', async (req, res) =>{
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
    const page = req.query.page ? parseInt(req.query.page): 0;

    res.json(await controller.getAccountsLimitTenThousand(pageSize, page));
});

module.exports = router;