const axios = require("axios");

module.exports = {

  viewInternRecruitment: async (req, res) => {
    let internrecruitmentResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let internrecruitmentData = internrecruitmentResponse.data;

    res.render("internrecruit/intern", {
      internrecruitmentData,
    });
  },

  viewPostInternRecruitment: async (req, res) => {
    let internrecruitmentcategoryResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let internrecruitmentcategoryData = internrecruitmentcategoryResponse.data;

    res.render("internrecruit/add_intern", {
      internrecruitmentcategoryData,
    });
  },

};
