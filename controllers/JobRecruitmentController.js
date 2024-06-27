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
      "https://jsonplaceholder.typicode.com/posts"
    );

    let jobrecruitmentcategoryData = jobrecruitmentcategoryResponse.data;

    res.render("jobrecruit/job_category", {
      jobrecruitmentcategoryData,
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

};
