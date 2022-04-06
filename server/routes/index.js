const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/games", (req, res) => {
  //res.send({ response: "coucou" }).status(200);
  res.sendFile(path.join(__dirname, "../../pec22/src/app.js"));
});

module.exports = router;
