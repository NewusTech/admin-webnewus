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
      try {
    
        // const {id} = req.params;

        // Panggil API dengan parameter id
        const settingResponse = await axios.get(
          `${process.env.baseUrl}/admin/socialmedia/get`
        );
    
        let responseData = settingResponse.data;
  
        res.render("socialmedia", {
          dataSetting : responseData.data
        });
      } catch (error) {
        console.error('ERRRRRRR : ',error);
        res.status(500).send("Terjadi kesalahan pada server");
      }
    },
    
  updateSosmed: async (req, res) => {
      try {
        const id = req.params.id;
        const { link, token } = req.body;
    
        let settingResponse = await axios.put(
          `${process.env.baseUrl}/admin/${id}/socialmedia/update`,
          { link },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            }
          }
        );
    
        if (settingResponse.status === 200) {
          res.render('socialmedia', {
            successMessage: 'Social media updated successfully',
            settingData: settingResponse.data.data 
          });
        } else {
          res.render('socialmedia', {
            errorMessage: 'Failed to updated setting tag',
            settingData: req.body
          });
        }
      } catch (error) {
        console.error('Error updating tag:', error.message);
        res.render('socialmedia', {
          errorMessage: 'Internal Server Error',
          settingData: req.body
        });
      }
    },

  viewSEO: async (req, res) => {
    try {
  
      // Panggil API dengan parameter id
      const settingResponse = await axios.get(
        `${process.env.baseUrl}/admin/1/seo/detail`,
      );
  
      let responseData = settingResponse.data;

      res.render("seo", {
        dataSetting : responseData.data
      });
    } catch (error) {
      console.error('ERRRRRRR : ',error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateSEO: async (req, res) => {
    try {
 
      const id = 1;
      const { tagManager, googleTagManager, searchConsole, googleAnalytics, token } = req.body;
  
      let settingResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/seo/update`,
        { tagManager, googleTagManager, searchConsole, googleAnalytics },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (settingResponse.status === 200) {
        res.render('seo', {
          successMessage: 'Category updated successfully',
          dataSetting: settingResponse.data
        });
      } else {
        res.render('seo', {
          errorMessage: 'Failed to update category',
          dataSetting: req.body
        });
      }
    } catch (error) {
      console.error('Error updating category:', error.message);
      res.render('seo', {
        errorMessage: 'Internal Server Error',
        dataSetting: req.body
      });
    }
  },
};
