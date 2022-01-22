const express = require("express");

const router = express.Router();
const validator = require("express-joi-validation").createValidator({});
const { logger } = require("../logs/logger");

router.post("/", async (req, res) => {
  try {
    console.log("test Route");
  } catch (e) {
    logger.error(error_codes.E0, playerInfo);
    return res.status(500).json({
      code: "E0",
      error: e,
    });
  }
});

module.exports = router;