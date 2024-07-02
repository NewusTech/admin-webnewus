const axios = require("axios");

module.exports = {

  viewCompany: async (req, res) => {
    let companyResponse = await axios.get(
      `${process.env.baseUrl}/admin/aboutcompany/get`,
    );

    let responseData = companyResponse.data;

    res.render("company/company", {
      companyData : responseData.data,
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
