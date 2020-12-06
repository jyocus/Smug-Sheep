// Dependencies
const express = require('express');
const routes = require('./routes');
const mongoose = require("mongoose");
require('dotenv').config();
// Express instance
const app = express();
// Variable Port
const PORT = process.env.PORT || 9001;
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sheep_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=> console.log('connect'))
  .catch((error) => console.error(error));

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};

// API and View Routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});