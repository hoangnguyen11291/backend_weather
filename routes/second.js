const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send({ data: "This is Second Route" });
});

module.exports = router;
