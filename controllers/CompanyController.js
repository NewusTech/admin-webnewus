const axios = require("axios");

module.exports = {

  viewCompany: async (req, res) => {
    let companyResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let companyData = companyResponse.data;

    res.render("company/company", {
      companyData,
    });
  },

  viewPostCompany: async (req, res) => {
    let companyResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let companyData = companyResponse.data;

    res.render("company/add_company", {
      companyData,
    });
  },
  
};
