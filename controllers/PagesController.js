const axios = require("axios");

module.exports = {
  viewPages: async (req, res) => {
    let pagesResponse = await axios.get(
      `${process.env.baseUrl}/admin/seo/pages/lists`
    );

    let responseData = pagesResponse.data;

    res.render("pages/pages", {
      pagesData: responseData.data,
    });
  },

  detailPages: async (req, res) => {
    try {
      const { id } = req.params;

      // Panggil API dengan parameter slug
      const pagesResponse = await axios.get(
        `${process.env.baseUrl}/admin/kategoriportofolio/get/${id}`
      );

      const responseData = pagesResponse.data;

      res.render("portofolio/detail_portofolio_category", {
        pagesData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  viewUpdatePages: async (req, res) => {
    try {
      const { id } = req.params;

      // Panggil API dengan parameter id
      const pagesResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/seo/pages/detail`
      );

      const responseData = pagesResponse.data;

      res.render("pages/edit_pages", {
        pagesData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updatePages: async (req, res) => {
    try {
      const id = req.params.id;
      const pagesData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/seo/pages/update`,
        pagesData
      );

      if (updateResponse.status === 200) {
        res.redirect('seo/pages');
      } else {
        res.status(400).send('Failed to update pages data');
      }
    } catch (error) {
      console.error('Error updating pages data:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}
