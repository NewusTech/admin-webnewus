const axios = require("axios");
const FormData = require("form-data");

module.exports = {

  viewService: async (req, res) => {
    let serviceResponse = await axios.get(
      `${process.env.baseUrl}/admin/service/get`
    );

    let responseData = serviceResponse.data;

    res.render("service/service", {
      serviceData : responseData.data,
    });
  },

  viewPostService: async (req, res) => {
    let serviceResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let serviceData = serviceResponse.data;

    res.render("service/add_service", {
      serviceData,
    });
  },

  detailService: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter slug
      const serviceResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/service/detail`
      );
  
      const responseData = serviceResponse.data;
  
      res.render("service/detail_service", {
        serviceData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createService: async (req, res) => {
    try {
      const token = req.body.token;
      const formData = new FormData();
      const imageFile = req.files.image;

      formData.append("title", req.body.title);
      formData.append("description", req.body.description);
      formData.append("image", imageFile.data, imageFile.name);
      formData.append("createdAt", new Date().toISOString());
      formData.append("updatedAt", new Date().toISOString());

      const response = await axios.post(
        `${process.env.baseUrl}/admin/blog/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      if (response.status === 201) {
        res.render('service/add_service', { successMessage: 'Service created successfully' });
      } else {
        res.render('service/add_service', { errorMessage: 'Failed to create service' });
      }
    } catch (error) {
      console.error('Error creating service:', error);
      res.render('service/add_service', { errorMessage: 'Error creating service' });
    }
  },
  
};
