const router = require('express').Router();

const genericController = require("../../controllers/genericController");

// Matches with "/api/generic"
router.route("/")
  .get(genericController.genericTest)

  router.route("/")
  .get(genericController.findAll)

module.exports = router;
