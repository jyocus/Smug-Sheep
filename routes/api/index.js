const router = require("express").Router();
const genericRoutes = require("./generic");
const genericController = require("../../controllers/genericController")

// generic routes
router.use("/generic", genericRoutes);

router
.route("/posts")
.get(genericController.findAll)
.post(genericController.create)
// .get(function(req,res){
//     console.log("api was hit")
//     res.json("Hello")
// })
// .post(function(req,res){
//     console.log("post api was hit")
//     res.json("Hello post api")
// })

module.exports = router;
