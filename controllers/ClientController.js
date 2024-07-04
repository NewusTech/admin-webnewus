const axios = require("axios");

module.exports = {

  viewClient: async (req, res) => {
    let clientResponse = await axios.get(
      `${process.env.baseUrl}/admin/client/get`
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

  detailClient: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const blogResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/client/detail`
      );
  
      const responseData = blogResponse.data;
  
      res.render("client/detail_client", {
        blogData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

};