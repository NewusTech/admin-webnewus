const axios = require("axios");

module.exports = {

  viewWhyUs: async (req, res) => {
    let whyusResponse = await axios.get(
      `${process.env.baseUrl}/admin/whyus/lists`
    );

    let responseData = whyusResponse.data;

    res.render("whyus/whyus", {
      whyusData : responseData.data,
    });
  },

  viewPostWhyUs: async (req, res) => {
    let whyusResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let whyusData = whyusResponse.data;

    res.render("whyus/add_whyus", {
      whyusData,
    });
  },

  detailWhyUs: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const whyusResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/whyus/detail`
      );
  
      const responseData = whyusResponse.data;
  
      res.render("whyus/detail_whyus", {
        whyusData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createWhyUs: async (req, res) => {
    try {
      const {
        description,
        image,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/whyus/create`, {
        description,
        image,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        token,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          res.render('whyus/add_whyus', { successMessage: 'Why us created successfully' });
        } else {
          res.render('whyus/add_whyus', { errorMessage: 'Failed to create why us' });
        }
    } catch (error) {
      res.render('whyus/add_whyus', { errorMessage: 'Error creating why us' });
    }
  },

  viewUpdateWhyUs: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const whyusResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/whyus/detail`
      );
  
      const responseData = whyusResponse.data;
  
      res.render("whyus/edit_whyus", {
        whyusData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateWhyUs: async (req, res) => {
    try {
      const id = req.params.id;
      const whyusData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/whyus/update`,
        whyusData
      );

      if (updateResponse.status === 200) {
        res.redirect('/whyus');
      } else {
        res.status(400).send('Failed to update whyus data');
      }
    } catch (error) {
      console.error('Error updating whyus data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

};