const router = require("express").Router();
const genericRoutes = require("./generic");

// generic routes
router.use("/generic", genericRoutes);

router
.route("/posts")
.get(function(req,res){
    console.log("api was hit")
    res.json("Hello")
})
.post(function(req,res){
    console.log("post api was hit")
    res.json("Hello post api")
})

module.exports = router;
