const router = require("express").Router();
const genericRoutes = require("./generic");

// generic routes
router.use("/generic", genericRoutes);

module.exports = router;

// We need two seperate routes for API calls. One for data added by user and one for third-party API calls. (USE AXIOS)
