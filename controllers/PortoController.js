const axios = require("axios");

module.exports = {

  viewPortofolio: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://api-services.newus.id/api/admin/blog/get"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio", {
      portofolioData : responseData.data,
    });
  },

  viewPostPortofolio: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/add_portofolio", {
      portofolioData: responseData,
    });
  },

  viewPortofolioCategory: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://api-services.newus.id/api/admin/kategoriportofolio/get"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio_category", {
      portofolioData : responseData.data,
    });
  },

  
  viewPostPortofolioCategory: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let portofolioData = portofolioResponse.data;

    res.render("portofolio/add_portofolio_category", {
      portofolioData,
    });
  },

  viewPortofolioTag: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://api-services.newus.id/api/admin/tagportofolio/get"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio_tag", {
      portofolioData : responseData.data,
    });
  },

  viewPostPortofolioTag: async (req, res) => {
    let portofoliotagResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let portofoliotagData = portofoliotagResponse.data;

    res.render("portofolio/add_portofolio_tag", {
      portofoliotagData,
    });
  },


};
