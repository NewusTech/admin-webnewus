const axios = require("axios");

module.exports = {

  viewPortofolio: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://api-services.newus.id/api/admin/blog/get"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio", {
      portofolioData : responseData.data,
    });
  },

  viewPostPortofolio: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/add_portofolio", {
      portofolioData: responseData,
    });
  },

  detailPortofolio: async (req, res) => {
    try {
      const { slug } = req.params;
  
      // Panggil API dengan parameter slug
      const portofolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/${slug}/portfolio/detail` 
      );
  
      const responseData = portofolioResponse.data;
  
      res.render("portofolio/detail_portofolio", {
        portofolioData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  viewPortofolioCategory: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://api-services.newus.id/api/admin/kategoriportofolio/get"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio_category", {
      portofolioData : responseData.data,
    });
  },

  
  viewPostPortofolioCategory: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let portofolioData = portofolioResponse.data;

    res.render("portofolio/add_portofolio_category", {
      portofolioData,
    });
  },

  detailPortofolioCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter slug
      const portfolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/kategoriportofolio/get/${id}`,
      );
  
      const responseData = portfolioResponse.data;
  
      res.render("portofolio/detail_portofolio_category", {
        portfolioData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  viewPortofolioTag: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://api-services.newus.id/api/admin/tagportofolio/get"
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio_tag", {
      portofolioData : responseData.data,
    });
  },

  viewPostPortofolioTag: async (req, res) => {
    let portofoliotagResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let portofoliotagData = portofoliotagResponse.data;

    res.render("portofolio/add_portofolio_tag", {
      portofoliotagData,
    });
  },

  detailPortofolioTag: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const portofolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/tagportofolio/get/${id}`
      );
  
      const responseData = portofolioResponse.data;
  
      res.render("portofolio/detail_portofolio_tag", {
        portofolioData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },




};
