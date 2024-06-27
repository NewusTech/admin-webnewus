const axios = require("axios");

module.exports = {

  viewService: async (req, res) => {
    let serviceResponse = await axios.get(
      "https://api-services.newus.id/api/admin/service/get"
    );

    let responseData = serviceResponse.data;

    res.render("service/service", {
      serviceData : responseData.data,
    });
  },

  viewPostService: async (req, res) => {
    let serviceResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let serviceData = serviceResponse.data;

    res.render("service/add_service", {
      serviceData,
    });
  },
  
};
