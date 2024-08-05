const axios = require("axios");

module.exports = {

  viewBanner: async (req, res) => {
    let bannerResponse = await axios.get(
      `${process.env.baseUrl}/admin/banner/get`
    );

    let responseData = bannerResponse.data;

    res.render("banner/banner", {
      bannerData : responseData.data,
    });
  },

  viewPostBanner: async (req, res) => {
    let bannerResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let bannerData = bannerResponse.data;

    res.render("banner/add_banner", {
      bannerData,
    });
  },

  detailBanner: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const bannerResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/banner/detail`
      );
  
      const responseData = bannerResponse.data;
  
      res.render("banner/detail_banner", {
        bannerData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  viewUpdateBanner: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const bannerResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/banner/detail`
      );
  
      const responseData = bannerResponse.data;
  
      res.render("banner/edit_banner", {
        bannerData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateBanner: async (req, res) => {
    try {
      const id = req.params.id;
      const bannerData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/banner/update`,
        bannerData
      );

      if (updateResponse.status === 200) {
        res.redirect('/banner');
      } else {
        res.status(400).send('Failed to update banner data');
      }
    } catch (error) {
      console.error('Error updating banner data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteBanner: async (req, res) => {
    try {
      const { id } = req.params;

      // Memanggil endpoint API untuk menghapus layanan
      await axios.delete(`${process.env.baseUrl}/admin/${id}/banner/delete`);

      res.status(200).json({
        message: "banner deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting banner",
      });
    }
  },


};