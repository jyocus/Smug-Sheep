import axios from "axios";

export default {

getUser: function() {
    return axios.get("/api/user/:id")
}






}