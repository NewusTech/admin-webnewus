const axios = require("axios");

module.exports = {

  viewCompanyProfile: async (req, res) => {
    let id = 1;

    let legalitasResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/legalitas/get"
      `${process.env.baseUrl}/admin/${id}/legalitas/detail`,
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
    let id = 1;

    let legalitasResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/legalitas/get"
      `${process.env.baseUrl}/admin/${id}/legalitas/detail`,
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

  viewAktaPendirian: async (req, res) => {
    let = 1; 

    let legalitasResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/legalitas/get"
      `${process.env.baseUrl}/admin/${id}/legalitas/detail`,
    );

    let responseData = legalitasResponse.data;

    res.render("legalitas/akta_pendirian", {
      legalitasData : responseData.data,
    });
  },

  viewPostAktaPendirian: async (req, res) => {
    let legalitasResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let legalitasData = legalitasResponse.data;

    res.render("legalitas/add_akta_pendirian", {
      legalitasData,
    });
  },

  viewSuratPengesahan: async (req, res) => {
    let id = 1;

    let legalitasResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/legalitas/get"
      `${process.env.baseUrl}/admin/${id}/legalitas/detail`,
    );

    let responseData = legalitasResponse.data;

    res.render("legalitas/surat_pengesahan", {
      legalitasData : responseData.data,
    });
  },

  viewPostSuratPengesahan: async (req, res) => {
    let legalitasResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let legalitasData = legalitasResponse.data;

    res.render("legalitas/add_surat_pengesahan", {
      legalitasData,
    });
  },


};
