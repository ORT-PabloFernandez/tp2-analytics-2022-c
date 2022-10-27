const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/acountsController");

//Queda dinamico por si quieren ver otros limites
//{{localHost}}/api/accounts/?limit=9000
router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit) : 0;

  res.json(await controller.getAcountByLimit(limit));
});

module.exports = router;
