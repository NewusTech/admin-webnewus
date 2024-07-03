const axios = require("axios");

module.exports = {

  viewJobRecruitment: async (req, res) => {
    let jobrecruitmentResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let jobrecruitmentData = jobrecruitmentResponse.data;

    res.render("jobrecruit/job", {
      jobrecruitmentData,
    });
  },

  viewPostJobRecruitment: async (req, res) => {
    let jobrecruitmentResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let jobrecruitmentData = jobrecruitmentResponse.data;

    res.render("jobrecruit/add_job", {
      jobrecruitmentData,
    });
  },

  viewJobRecruitmentCategory: async (req, res) => {
  let jobrecruitmentcategoryResponse = await axios.get(
    `${process.env.baseUrl}/admin/jobcategory/lists`,
  );

  let responseData = jobrecruitmentcategoryResponse.data;

  res.render("jobrecruit/job_category", {
    jobrecruitmentcategoryData : responseData.data,
  });
},

  viewPostJobRecruitmentCategory: async (req, res) => {
    let jobrecruitmentcategoryResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let jobrecruitmentcategoryData = jobrecruitmentcategoryResponse.data;

    res.render("jobrecruit/add_job_category", {
      jobrecruitmentcategoryData,
    });
  },

  detailJobRecruitmentCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const jobrecruitmentcategoryResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/jobcategory/detail`,
      );
  
      const responseData = jobrecruitmentcategoryResponse.data;
  
      res.render("jobrecruit/detail_job_category", {
        jobrecruitmentcategoryData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

};
