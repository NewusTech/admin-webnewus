const axios = require("axios");

module.exports = {

  viewClient: async (req, res) => {
    let clientResponse = await axios.get(
      "https://api-services.newus.id/api/admin/client/get"
    );

    let responseData = clientResponse.data;

    res.render("client/client", {
      clientData : responseData.data,
    });
  },

  viewPostClient: async (req, res) => {
    let clientResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let clientData = clientResponse.data;

    res.render("client/add_client", {
      clientData,
    });
  },

};