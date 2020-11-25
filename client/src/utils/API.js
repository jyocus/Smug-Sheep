import axios from "axios";

let userData = {}

export default {

getUser: function(data) {
    //return axios.get("/api/user/:id")
    console.log(data);
    userData = data;
    return userData;
},
showUser: function() {
    console.log(userData)
}







}