const axios = require("axios");

module.exports = {

  viewCompany: async (req, res) => {
    let companyResponse = await axios.get(
      `${process.env.baseUrl}/admin/aboutcompany/get`,
    );

    let responseData = companyResponse.data;

    res.render("company/company", {
      companyData : responseData.data,
    });
  },

  viewPostCompany: async (req, res) => {
    let companyResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let companyData = companyResponse.data;

    res.render("company/add_company", {
      companyData,
    });
  },

  createCompany: async (req, res) => {
    try {
      const {
        description,
        vision,
        mission,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/aboutcompany/create`, {
        description,
        vision,
        mission,
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
          res.render('company/add_company', { successMessage: 'company created successfully' });
        } else {
          res.render('company/add_company', { errorMessage: 'Failed to create company' });
        }
    } catch (error) {
      res.render('company/add_company', { errorMessage: 'Error creating company' });
    }
  },

  detailCompany: async (req, res) => {
    try {
      const { slug } = req.params;
  
      // Panggil API dengan parameter slug
      const companyResponse = await axios.get(
        `${process.env.baseUrl}`
      );
  
      const responseData = companyResponse.data;
  
      res.render("company/detail_company", {
        companyData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  viewUpdateCompany: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const companyResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/aboutcompany/detail`
      );
  
      const responseData = companyResponse.data;
  
      res.render("company/edit_company", {
        companyData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateCompany: async (req, res) => {
    try {
      const id = req.params.id;
      const { body, vision, mission, token } = req.body;
  
      let companyResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/aboutcompany/update`,
        { body, vision, mission },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (companyResponse.status === 200) {
        res.render('company/edit_company', {
          successMessage: 'Company updated successfully',
          companyData: companyResponse.data.data 
        });
      } else {
        res.render('company/edit_company', {
          errorMessage: 'Failed to company',
          companyData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating company:', error.message);
      res.render('company/edit_company', {
        errorMessage: 'Internal Server Error',
        companyData: req.body
      });
    }
  },
  
};
