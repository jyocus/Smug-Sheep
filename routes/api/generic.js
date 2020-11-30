const router = require('express').Router();

const genericController = require("../../controllers/genericController");

// Matches with "/api/generic"
router.route("/")
  .get(genericController.genericTest)

router.route("/favQ")
  .get(genericController.favQs)  

module.exports = router;
