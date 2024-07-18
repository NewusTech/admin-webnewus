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

  viewUpdateGaleri: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const galeriResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/media/detail`
      );
  
      const responseData = galeriResponse.data;
  
      res.render("galeri/edit_galeri", {
        galeriData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateGaleri: async (req, res) => {
    try {
      const id = req.params.id;
      const galeriData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/media/update`,
        galeriData
      );

      if (updateResponse.status === 200) {
        res.redirect('/galeri');
      } else {
        res.status(400).send('Failed to update galeri data');
      }
    } catch (error) {
      console.error('Error updating galeri data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteGaleri: async (req, res) => {
    try {
      const { id } = req.params;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/media/delete`);

      res.status(200).json({
        message: "Galeri deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting galeri",
      });
    }
  },

};