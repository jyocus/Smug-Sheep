const mongoose = require("mongoose");
const Example = require("./models/post");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sheep_db", { useNewUrlParser: true })