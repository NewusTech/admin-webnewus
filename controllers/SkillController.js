const axios = require("axios");
const FormData = require("form-data");

module.exports = {

  viewSkill: async (req, res) => {
    let skillResponse = await axios.get(
      `${process.env.baseUrl}/admin/skill/lists`
    );

    let responseData = skillResponse.data;

    res.render("skill/skill", {
      skillData : responseData.data,
    });
  },

  viewPostSkill: async (req, res) => {
    let skillResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let skillData = skillResponse.data;

    res.render("skill/add_skill", {
      skillData,
    });
  },

  detailSkill: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter slug
      const skillResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/skill/detail`
      );
  
      const responseData = skillResponse.data;
  
      res.render("skill/detail_skill", {
        skillData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createSkill: async (req, res) => {
    try {
      const token = req.body.token;
      const formData = new FormData();
      const imageFile = req.files.image;

      formData.append("title", req.body.title);
      formData.append("image", imageFile.data, imageFile.name);
      formData.append("createdAt", new Date().toISOString());
      formData.append("updatedAt", new Date().toISOString());

      const response = await axios.post(
        `${process.env.baseUrl}/admin/skill/new-skill`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      if (response.status === 201) {
        res.render('skill/add_skill', { successMessage: 'Skill created successfully' });
      } else {
        res.render('skill/add_skill', { errorMessage: 'Failed to create skill' });
      }
    } catch (error) {
      console.error('Error creating skill:', error);
      res.render('skill/add_skill', { errorMessage: 'Error creating skill' });
    }
  },
  
};
