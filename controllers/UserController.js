const axios = require("axios");

module.exports = {

  viewProfile: async (req, res) => {
    let userResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let userData = userResponse.data;

    res.render("user/profile", {
      userData,
    });
  },

  viewLogin: async (req, res) => {
    let userResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let userData = userResponse.data;

    res.render("user/login", {
      userData,
    });
  },

  viewForgotPass: async (req, res) => {
    let userResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let userData = userResponse.data;

    res.render("user/forgot_pass", {
      userData,
    });
  },

  viewResetPass: async (req, res) => {
    let userResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let userData = userResponse.data;

    res.render("user/reset_pass", {
      userData,
    });
  },
  
};
