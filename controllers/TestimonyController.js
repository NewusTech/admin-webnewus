const axios = require("axios");

module.exports = {

  viewTestimony: async (req, res) => {
    let testimonyResponse = await axios.get(
     `${process.env.baseUrl}/admin/testimony/lists`
    );

    let responseData = testimonyResponse.data;

    res.render("testimony/testimony", {
      testimonyData : responseData.data,
    });
  },

  viewPostTestimony: async (req, res) => {
    let testimonyResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let testimonyData = testimonyResponse.data;

    res.render("testimony/add_testimony", {
      testimonyData,
    });
  },

  createTestimony: async (req, res) => {
    try {
      const token = req.body.token;
      const formData = new FormData();
      const imageFile = req.files.image;

      formData.append("name", req.body.name);
      formData.append("testimony", req.body.testimony);
      formData.append("rating", req.body.rating);
      formData.append("image", imageFile.data, imageFile.name);
      formData.append("createdAt", new Date().toISOString());
      formData.append("updatedAt", new Date().toISOString());

      const response = await axios.post(
        `${process.env.baseUrl}/admin/testimony/new-testimony`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      if (response.status === 201) {
        res.render('testimony/add_testimony', { successMessage: 'Testimony created successfully' });
      } else {
        res.render('testimony/add_testimony', { errorMessage: 'Failed to create testimony' });
      }
    } catch (error) {
      console.error('Error creating testimony:', error);
      res.render('testimony/add_testimony', { errorMessage: 'Error creating testimony' });
    }
  },

  viewUpdateTestimony: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const testimonyResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/testimony/detail`
      );
  
      const responseData = testimonyResponse.data;
  
      res.render("testimony/edit_testimony", {
        testimonyData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateTestimony: async (req, res) => {
    try {
      const id = req.params.id;
      const testimonyData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/testimony/update`,
        testimonyData
      );

      if (updateResponse.status === 200) {
        res.redirect('/testimony');
      } else {
        res.status(400).send('Failed to update testimony data');
      }
    } catch (error) {
      console.error('Error updating testimony data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteTestimony: async (req, res) => {
    try {
      const { id } = req.params;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/testimony/delete`);

      res.status(200).json({
        message: "Testimony deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting testimony",
      });
    }
  },
  
};
