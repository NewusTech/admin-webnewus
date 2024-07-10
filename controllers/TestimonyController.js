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

  
};
