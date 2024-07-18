const axios = require("axios");

module.exports = {
  viewJobRecruitment: async (req, res) => {
    let jobrecruitmentResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/jobrecruitment/get"
      `${process.env.baseUrl}/admin/jobrecruitment/lists`,
    );

    let responseData = jobrecruitmentResponse.data;

    res.render("jobrecruit/job", {
      jobrecruitmentData : responseData.jobRecruitment,
    });
  },

  viewPostJobRecruitment: async (req, res) => {
    let jobrecruitResponse = await axios.get(
      `${process.env.baseUrl}/admin/jobcategory/lists`
    );
    let responseData = jobrecruitResponse.data;

    res.render("jobrecruit/add_job", {
      jobrecruitData : responseData.data,
    });
  },

  detailJobRecruitment: async (req, res) => {
    try {
      const { id } = req.params;

      const jobrecruitmentResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/jobrecruitment/detail`
      );

      const responseData = jobrecruitmentResponse.data;

      res.render("jobrecruit/detail_job", {
        jobrecruitmentData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createJobRecruitment: async (req, res) => {
    try {
      const {
        title,
        description,
        salary,
        stetus,
        JobCategoryId,
        coverLetter,
        status,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/jobrecruitment/new-job`, {
        title,
        description,
        salary,
        stetus,
        JobCategoryId,
        coverLetter,
        status,
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
          res.render('jobrecruit/add_job', { successMessage: 'Job Recruitment created successfully' });
        } else {
          res.render('jobrecruit/add_job', { errorMessage: 'Failed to create job recruitment' });
        }
    } catch (error) {
      res.render('jobrecruit/add_job', { errorMessage: 'Error creating job recruitment' });
    }
  },

  viewJobRecruitmentCategory: async (req, res) => {
    let jobrecruitmentcategoryResponse = await axios.get(
      `${process.env.baseUrl}/admin/jobcategory/lists`
    );

    let responseData = jobrecruitmentcategoryResponse.data;

    res.render("jobrecruit/job_category", {
      jobrecruitmentcategoryData: responseData.data,
    });
  },

  viewPostJobRecruitmentCategory: async (req, res) => {
    let jobrecruitmentcategoryResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let jobrecruitmentcategoryData = jobrecruitmentcategoryResponse.data;

    res.render("jobrecruit/add_job_category", {
      jobrecruitmentcategoryData,
    });
  },

  detailJobRecruitmentCategory: async (req, res) => {
    try {
      const { id } = req.params;

      const jobrecruitmentcategoryResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/jobcategory/detail`
      );

      const responseData = jobrecruitmentcategoryResponse.data;

      res.render("jobrecruit/detail_job_category", {
        jobrecruitmentcategoryData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createJobRecruitmentCategory: async (req, res) => {
    try {
      const {
        title,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/jobcategory/create`, {
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
          res.render('jobrecruit/add_job_category', { successMessage: 'Job category created successfully' });
        } else {
          res.render('jobrecruit/add_job_category', { errorMessage: 'Failed to create job category' });
        }
    } catch (error) {
      res.render('jobrecruit/add_job_category', { errorMessage: 'Error creating job category' });
    }
  },

  viewUpdateJobCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const jobrecruitmentcategoryResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/jobcategory/detail`
      );
  
      const responseData = jobrecruitmentcategoryResponse.data;
  
      res.render("jobrecruit/edit_job_category", {
        jobrecruitmentcategoryData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateJobCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, token } = req.body;
  
      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/jobcategory/update`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (updateResponse.status === 200) {
        res.render('jobrecruit/edit_job_category', {
          successMessage: 'Category updated successfully',
          jobrecruitmentcategoryData: updateResponse.data.data 
        });
      } else {
        res.render('jobrecruit/edit_job_category', {
          errorMessage: 'Failed to update category',
          jobrecruitmentcategoryData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating category:', error.message);
      res.render('jobrecruit/edit_job_category', {
        errorMessage: 'Internal Server Error',
        jobrecruitmentcategoryData: req.body
      });
    }
  },
  
};
