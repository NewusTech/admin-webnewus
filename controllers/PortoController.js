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

    let tagResponse = await axios.get(
      `${process.env.baseUrl}/admin/tagportofolio/get`
    );

    let responseData = portofolioResponse.data;
    let responseDataTag = tagResponse.data;

    res.render("portofolio/add_portofolio", {
      portofolioData: responseData.data,
      tagData : responseDataTag.data,
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
  
      const responseData = portofolioResponse.data;
      const responseDataCategory = portofoliocategoryResponse.data;
      const responseDataTag = tagResponse.data;
  
      res.render("portofolio/edit_portofolio", {
        portofolioData: responseData.portfolio,
        portofoliocategoryData: responseDataCategory.data,
        tagData : responseDataTag.data,
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
};
