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

  detailGaleri: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const galeriResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/media/detail`,
      );
  
      const responseData = galeriResponse.data;
  
      res.render("galeri/detail_galeri", {
        galeriData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

};