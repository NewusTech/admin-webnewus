const axios = require("axios");

module.exports = {

  viewMessage: async (req, res) => {
    let messageResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let messageData = messageResponse.data;

    res.render("history/message", {
      messageData,
    });
  },

  
};
