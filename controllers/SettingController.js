const axios = require("axios");

module.exports = {

  viewSetting: async (req, res) => {
    let settingResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let settingData = settingResponse.data;

    res.render("setting", {
      settingData,
    });
  },

  viewSosmed: async (req, res) => {
    let settingResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let settingData = settingResponse.data;

    res.render("socialmedia", {
      settingData,
    });
  },

  viewSeo: async (req, res) => {
    let settingResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let settingData = settingResponse.data;

    res.render("seo", {
      settingData,
    });
  }
};
