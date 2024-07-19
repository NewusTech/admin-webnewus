const axios = require("axios");

module.exports = {
  viewIndex: async (req, res) => {

    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    
    let responseData = response.data

    res.render("dashboard", {
      response: responseData,
    });
  },

  viewSetting: async (req, res) => {
    let settingResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let settingData = settingResponse.data;

    res.render("setting", {
      settingData,
    });
  }
};
