//  Connect to db
// const db = require('../models');
const db = 'hello';
const axios = require('axios')
var favQsURL = "https://favqs.com/api/" + "quotes/?filter=funny&type=tag";

let settings = {
    url: favQsURL,
    method: "GET",
    headers: {
        authorization: 
        "Bearer 19fc73e5352d2abf14a4264b58512ba9"}
}

// Export Controller Methods
module.exports = {
    genericTest: function(req, res) {
        res.json(db);
    },
    favQs: function(req, res) {
        // axios(settings).then(res => {
        //     console.log(res)
        // });
        axios.get(favQsURL , { headers: {"Authorization" : `Bearer 19fc73e5352d2abf14a4264b58512ba9`} }).then(response => {
            console.log(response);
            res.json({"test": "working"});
            
        })    
    }
};