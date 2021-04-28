const express = require("express");
const router = express.Router();
// const secondRouter = require("./second");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({
    data: {
      title: "first fullstack",
      content: "blahahahasdasdadasd",
      time: "today",
    },
  });
});

/* GET second page */
// router.use("/second", secondRouter);

/* Get Weather */
const forecast = require("./forecast");
router.get("/weather", async function (req, res, next) {
  try {
    const city = req.query.city;
    if (city) {
      let result = await getCityForecast(city);
      res.send({ status: "200", data: result });
    } else {
      res.send({ status: 400, data: "we don't get this city" });
    }
  } catch (err) {
    next(err);
  }

module.exports = router;
