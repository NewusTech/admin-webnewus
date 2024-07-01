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
  
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const response = await axios.post(
        "https://api-services.newus.id/api/admin/login",
        { email, password }
      );

      if (response.data.status === 200) {
        const token = response.data.data.token;

        // Simpan token di local storage melalui frontend
        res.render("user/login", {
          successMessage: "Login successful!",
          token,
        });
      } else if (response.data.status === 403) {
        res.render("user/login", {
          errorMessage: "Login failed. Incorrect password.",
        });
      } else {
        res.render("user/login", {
          errorMessage: "Login failed. Please check your credentials.",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        res.render("user/login", {
          errorMessage: "Login failed. Incorrect password.",
        });
      } else if (error.response && error.response.status === 400) {
        const validationErrors = error.response.data.data
          .map((err) => err.message)
          .join(", ");
        res.render("user/login", {
          errorMessage: `Validation failed: ${validationErrors}`,
        });
      } else {
        console.error("Login error:", error);
        res.render("user/login", {
          errorMessage: "An error occurred during login. Please try again.",
        });
      }
    }
  },

};
