const axios = require("axios");

module.exports = {

  viewSetting: async (req, res) => {
    try {
  
      // Panggil API dengan parameter id
      const settingResponse = await axios.get(
        `${process.env.baseUrl}/admin/1/aboutcompany/detail`
      );
  
      let responseData = settingResponse.data;

      res.render("setting", {
        dataSetting : responseData.data
      });
    } catch (error) {
      console.error('ERRRRRRR : ',error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateSetting: async (req, res) => {
      const id = 1;
      const settingData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/aboutcompany/update`,
        settingData
      );

      if (updateResponse.status === 200) {
        res.redirect('/setting');
      } else {
        res.status(400).send('Failed to update setting data');
      }
    }, catch (error) {
      console.error('Error updating setting data:', error);
      res.status(500).send('Internal Server Error');
    },

  viewSosmed: async (req, res) => {
    let settingResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let settingData = settingResponse.data;

    res.render("socialmedia", {
      settingData,
    });
  },

  viewSeo: async (req, res) => {
    let settingResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let settingData = settingResponse.data;

    res.render("seo", {
      settingData,
    });
  }
};
