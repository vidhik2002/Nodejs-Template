const express = require("express");

const router = express.Router();
const validator = require("express-joi-validation").createValidator({});
const { authSchema } = require("../utils/validation_schema");
const { logger } = require("../logs/logger");

router.post("/",validator.body(authSchema), async (req, res) => {
  try {
    username = req.body;
    return res.json({
      code: "E1",
      message: username
    });
  } catch (e) {
    logger.error(error_codes.E0, playerInfo);
    return res.status(500).json({
      code: "E0",
      error: e,
    });
  }
});

module.exports = router;