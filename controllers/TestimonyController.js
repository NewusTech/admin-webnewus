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

  
};
