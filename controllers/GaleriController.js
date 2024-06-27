const axios = require("axios");

module.exports = {

  viewGaleri: async (req, res) => {
    let galeriResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let galeriData = galeriResponse.data;

    res.render("galeri/galeri", {
      galeriData,
    });
  },

  viewPostGaleri: async (req, res) => {
    let galeriResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let galeriData = galeriResponse.data;

    res.render("galeri/add_galeri", {
      galeriData,
    });
  },

};