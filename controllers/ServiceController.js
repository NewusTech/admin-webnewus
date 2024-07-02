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

  detailService: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter slug
      const serviceResponse = await axios.get(
        `https://api-services.newus.id/api/admin/${id}/service/detail`
      );
  
      const responseData = serviceResponse.data;
  
      res.render("service/detail_service", {
        serviceData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },
  
};
