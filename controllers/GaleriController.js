const axios = require("axios");

module.exports = {

  viewGaleri: async (req, res) => {
    let galeriResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/blog/get"
      `${process.env.baseUrl}/admin/media/lists`,
    );

    let responseData = galeriResponse.data;

    res.render("galeri/galeri", {
      galeriData : responseData.data,
    });
  },

  viewPostGaleri: async (req, res) => {
    let galeriResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let galeriData = galeriResponse.data;

    res.render("galeri/add_galeri", {
      galeriData,
    });
  },

};