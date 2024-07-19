const axios = require("axios");

module.exports = {

  viewInternRecruitment: async (req, res) => {
    let internrecruitmentResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/internrecruitment/get"
      `${process.env.baseUrl}/admin/internrecruitment/get`,
    );

    let responseData = internrecruitmentResponse.data;

    res.render("internrecruit/intern", {
      internrecruitmentData : responseData.data,
    });
  },

  viewPostInternRecruitment: async (req, res) => {
    let internrecruitmentResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let internrecruitmentData = internrecruitmentResponse.data;

    res.render("internrecruit/add_intern", {
      internrecruitmentData,
    });
  },

  viewUpdateInternRecruitment: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const internrecruitmentResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/internrecruitment/detail`
      );
  
      const responseData = internrecruitmentResponse.data;
  
      res.render("internrecruit/edit_intern", {
        internrecruitmentData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateInternRecruitment: async (req, res) => {
    try {
      const id = req.params.id;
      const internrecruitmentData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/internrecruitment/update`,
        internrecruitmentData
      );

      if (updateResponse.status === 200) {
        res.redirect('/intern');
      } else {
        res.status(400).send('Failed to update intern recruitment data');
      }
    } catch (error) {
      console.error('Error updating intern recruitment data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteInternRecruitment: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/internrecruitment/delete`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "Intern recruitment deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting intern recruitment",
      });
    }
  },

};
