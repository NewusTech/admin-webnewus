const axios = require("axios");

module.exports = {

  viewCompanyProfile: async (req, res) => {
    let legalitasResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/legalitas/get"
      `${process.env.baseUrl}/admin/legalitas/get`,
    );

    let responseData = legalitasResponse.data;

    res.render("legalitas/company_profile", {
      legalitasData : responseData.data,
    });
  },

  viewPostCompanyProfile: async (req, res) => {
    let legalitasResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let legalitasData = legalitasResponse.data;

    res.render("legalitas/add_company_profile", {
      legalitasData,
    });
  },

  viewBidangUsaha: async (req, res) => {
    let legalitasResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/legalitas/get"
      `${process.env.baseUrl}/admin/legalitas/get`,
    );

    let responseData = legalitasResponse.data;

    res.render("legalitas/bidang_usaha", {
      legalitasData : responseData.data,
    });
  },

  viewPostBidangUsaha: async (req, res) => {
    let legalitasResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let legalitasData = legalitasResponse.data;

    res.render("legalitas/add_bidang_usaha", {
      legalitasData,
    });
  },


};
