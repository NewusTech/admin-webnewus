const axios = require("axios");

module.exports = {
  viewTermCondition: async (req, res) => {
    let termconditionResponse = await axios.get(
      `${process.env.baseUrl}/admin/tnc/lists`
    );

    let responseData = termconditionResponse.data;

    res.render("kebijakan/termcondition", {
      termconditionData: responseData.data,
    });
  },

  viewUpdateTermCondition: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const termconditionResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/tnc/detail`
      );
  
      const responseData = termconditionResponse.data;
  
      res.render("kebijakan/edit_term_condition", {
        termconditionData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateTermCondition: async (req, res) => {
    try {
      const id = req.params.id;
      const { content, token } = req.body;
  
      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/tnc/update`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (updateResponse.status === 200) {
        res.render('kebijakan/edit_term_condition', {
          successMessage: 'tnc updated successfully',
         termconditionData: updateResponse.data.data 
        });
      } else {
        res.render('kebijakan/edit_term_condition', {
          errorMessage: 'Failed to update tnc',
         termconditionData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating category:', error.message);
      res.render('kebijakan/edit_term_condition', {
        errorMessage: 'Internal Server Error',
       termconditionData: req.body
      });
    }
  },

  deleteTermCondition: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/tnc/delete`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "TNC deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting tnc",
      });
    }
  },

  viewPrivacyPolicy: async (req, res) => {
    let privacypolicyResponse = await axios.get(
      `${process.env.baseUrl}/admin/privacy/policy/lists`
    );

    let responseData = privacypolicyResponse.data;

    res.render("kebijakan/privacypolicy", {
      privacypolicyData: responseData.data,
    });
  },

  viewUpdatePrivacyPolicy: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const privacypolicyResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/privacy/policy/detail`
      );
  
      const responseData = privacypolicyResponse.data;
  
      res.render("kebijakan/edit_privacy_policy", {
        privacypolicyData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updatePrivacyPolicy: async (req, res) => {
    try {
      const id = req.params.id;
      const { content, token } = req.body;
  
      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/privacy/policy/update`,
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (updateResponse.status === 200) {
        res.render('kebijakan/edit_privacy_policy', {
          successMessage: 'Privacy policy updated successfully',
         privacypolicyData: updateResponse.data.data 
        });
      } else {
        res.render('kebijakan/edit_privacy_policy', {
          errorMessage: 'Failed to update privacy policy',
         privacypolicyData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating category:', error.message);
      res.render('kebijakan/edit_privacy_policy', {
        errorMessage: 'Internal Server Error',
       privacypolicyData: req.body
      });
    }
  },

  deletePrivacyPolicy: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/privacy/policy/delete`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "Privacy policy deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting privacy policy",
      });
    }
  },
  
};
