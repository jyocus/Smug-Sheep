import axios from "axios";

let userData = {}

export default {

  getUser: function (data) {
    //return axios.get("/api/user/:id")
    console.log(data);
    userData = data;
    return userData;
  },
  showUser: function () {
    console.log(userData)
  },
  // Gets all posts
  getPosts: function (res) {
    return axios.get("/api/posts");
  },
  // Saves a post to the database
  savePost: function (postData) {
    console.log(postData)
    return axios.post("/api/posts", postData);
  },
  getQuote: function () {
    return axios.get("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random")
  }
};