const axios = require("axios");

module.exports = {

  viewPortofolio: async (req, res) => {
    let portofolioResponse = await axios.get(
      `${process.env.baseUrl}/admin/portfolio/lists`
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio", {
      portofolioData : responseData.portfolios,
    });
  },

  viewPostPortofolio: async (req, res) => {
    let portofolioResponse = await axios.get(
      `${process.env.baseUrl}/admin/kategoriportofolio/get`
    );
    
    let technologyResponse = await axios.get(
      `${process.env.baseUrl}/admin/technology/lists`
    );

    let responseData = portofolioResponse.data;
    let responseDataTechnology = technologyResponse.data;

    res.render("portofolio/add_portofolio", {
      portofolioData: responseData.data,
      technologyData : responseDataTechnology.data,
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

  createPortofolio: async (req, res) => {
    try {
      const {
        title,
        slug,
        keyword,
        excerpt,
        body,
        KategoriportofolioId,
        TagportofolioId,
        portfolioYear,
        webLink,
        appsLink,
        image,
        logo,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/portfolio/new`, {
        title,
        slug,
        keyword,
        excerpt,
        body,
        KategoriportofolioId,
        TagportofolioId,
        portfolioYear,
        webLink,
        appsLink,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        image,
        logo,
        token,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          res.render('portofolio/add_portofolio', { successMessage: 'Portofolio created successfully' });
        } else {
          res.render('portofolio/add_portofolio', { errorMessage: 'Failed to create portofolio' });
        }
    } catch (error) {
      res.render('portofolio/add_portofolio', { errorMessage: 'Error creating portofolio' });
    }
  },

  viewUpdatePortofolio: async (req, res) => {
    try {
      const { slug } = req.params;
  
      // Panggil API dengan parameter slug
      const portofolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/${slug}/portfolio/detail`
      );
      const portofoliocategoryResponse = await axios.get(
        `${process.env.baseUrl}/admin/kategoriportofolio/get`
      );
      const tagResponse = await axios.get(
        `${process.env.baseUrl}/admin/tagportofolio/get`
      );
      let technologyResponse = await axios.get(
        `${process.env.baseUrl}/admin/technology/lists`
      );
  
      const responseData = portofolioResponse.data;

      const responseDataCategory = portofoliocategoryResponse.data;
      const responseDataTag = tagResponse.data;

      let responseDataTechnology = technologyResponse.data;

      res.render("portofolio/edit_portofolio", {
        portofolioData: responseData.data,
        portofoliocategoryData: responseDataCategory.data,
        tagData : responseDataTag.data,
        technologyData : responseDataTechnology.data,
      });
    } catch (error) {
      console.error(error);
      
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updatePortofolio: async (req, res) => {
    try {
      const id = req.params.id;
      const portofolioData = req.body;

      let portofolioResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/portfolio/detail`,
        portofolioData
      );

      if (portofolioResponse.status === 200) {
        res.redirect('/portofolio');
      } else {
        res.status(400).send('Failed to portofolio portofolio data');
      }
    } catch (error) {
      console.error('Error updating portofolio data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deletePortofolio: async (req, res) => {
    try {
      const { id } = req.params;

      // Memanggil endpoint API untuk menghapus layanan
      await axios.delete(`${process.env.baseUrl}/admin/${id}/portfolio/deleted`);

      res.status(200).json({
        message: "Portfolio deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting portfolio",
      });
    }
  },

  viewPortofolioCategory: async (req, res) => {
    let portofolioResponse = await axios.get(
      `${process.env.baseUrl}/admin/kategoriportofolio/get`
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

  createPortofolioCategory: async (req, res) => {
    try {
      const {
        title,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/kategoriportofolio/create`, {
        title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        token,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          res.render('portofolio/add_portofolio_category', { successMessage: 'Portofolio category created successfully' });
        } else {
          res.render('portofolio/add_portofolio_category', { errorMessage: 'Failed to create portofolio category' });
        }
    } catch (error) {
      res.render('portofolio/add_portofolio_category', { errorMessage: 'Error creating portofolio category' });
    }
  },

  viewUpdatePortofolioCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const portofolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/kategoriportofolio/get/${id}`
      );
  
      const responseData = portofolioResponse.data;
  
      res.render("portofolio/edit_portofolio_category", {
        portofolioData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updatePortofolioCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, token } = req.body;
  
      let portofolioResponse = await axios.put(
        `${process.env.baseUrl}/admin/kategoriportofolio/update/${id}`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (portofolioResponse.status === 200) {
        res.render('portofolio/edit_portofolio_category', {
          successMessage: 'Category updated successfully',
          portofolioData: portofolioResponse.data.data 
        });
      } else {
        res.render('portofolio/edit_portofolio_category', {
          errorMessage: 'Failed to updated portofolio category',
          portofolioData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating category:', error.message);
      res.render('portofolio/edit_portofolio_category', {
        errorMessage: 'Internal Server Error',
        portofolioData: req.body
      });
    }
  },

  deletePortofolioCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/kategoriportofolio/delete/${id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "Portofolio category deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting portofolio category",
      });
    }
  },

  viewPortofolioTag: async (req, res) => {
    let portofolioResponse = await axios.get(
      `${process.env.baseUrl}/admin/tagportofolio/get`
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

  createPortofolioTag: async (req, res) => {
    try {
      const {
        title,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/tagportofolio/create`, {
        title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        token,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          res.render('portofolio/add_portofolio_tag', { successMessage: 'Portofolio tag created successfully' });
        } else {
          res.render('portofolio/add_portofolio_tag', { errorMessage: 'Failed to create portofolio tag' });
        }
    } catch (error) {
      res.render('portofolio/add_portofolio_tag', { errorMessage: 'Error creating portofolio tag' });
    }
  },

  viewUpdatePortofolioTag: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const portofolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/tagportofolio/get/${id}`
      );
  
      const responseData = portofolioResponse.data;
  
      res.render("portofolio/edit_portofolio_tag", {
        portofolioData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updatePortofolioTag: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, token } = req.body;
  
      let portofolioResponse = await axios.put(
        `${process.env.baseUrl}/admin/tagportofolio/update/${id}`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (portofolioResponse.status === 200) {
        res.render('portofolio/edit_portofolio_tag', {
          successMessage: 'Tag updated successfully',
          portofolioData: portofolioResponse.data.data 
        });
      } else {
        res.render('portofolio/edit_portofolio_tag', {
          errorMessage: 'Failed to updated portofolio tag',
          portofolioData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating tag:', error.message);
      res.render('portofolio/edit_portofolio_tag', {
        errorMessage: 'Internal Server Error',
        portofolioData: req.body
      });
    }
  },

  deletePortofolioTag: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/tagportofolio/delete/${id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "Portofolio tag deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting portofolio tag",
      });
    }
  },

  viewPortofolioTechnology: async (req, res) => {
    let portofolioResponse = await axios.get(
      `${process.env.baseUrl}/admin/technology/lists`
    );

    let responseData = portofolioResponse.data;

    res.render("portofolio/portofolio_technology", {
      portofolioData : responseData.data,
    });
  },

  viewPostPortofolioTechnology: async (req, res) => {
    let portofolioResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let portofolioData = portofolioResponse.data;

    res.render("portofolio/add_portofolio_technology", {
      portofolioData,
    });
  },

  createPortofolioTechnology: async (req, res) => {
    try {
      const {
        title,
        image,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/technology/new-technology`, {
        title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        image,
        token,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          res.render('portofolio/add_portofolio_technology', { successMessage: 'Technology created successfully' });
        } else {
          res.render('portofolio/add_portofolio_technology', { errorMessage: 'Failed to create technology' });
        }
    } catch (error) {
      res.render('portofolio/add_portofolio_technology', { errorMessage: 'Error creating technology' });
    }
  },

  viewUpdatePortofolioTechnology: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const portofolioResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/technology/detail`
      );
  
      const responseData = portofolioResponse.data;
  
      res.render("portofolio/edit_portofolio_technology", {
        portofolioData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updatePortofolioTechnology: async (req, res) => {
    try {
      const id = req.params.id;
      const portofolioData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/technology/update`,
        portofolioData
      );

      if (updateResponse.status === 200) {
        res.redirect('/portofolio/tech');
      } else {
        res.status(400).send('Failed to update technology data');
      }
    } catch (error) {
      console.error('Error updating technology data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  deletePortofolioTechnology: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/technology/delete`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "Technology portofolio deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting technology portofolio",
      });
    }
  },
};
