const axios = require("axios");

module.exports = {

  viewTeam : async (req, res) => {
    let teamResponse = await axios.get(
      `${process.env.baseUrl}/admin/team/lists`
    );

    let responseData = teamResponse.data;

    res.render("team/team", {
      teamData : responseData.data,
    });
  },

  viewPostTeam: async (req, res) => {
    let teamResponse = await axios.get(
      `${process.env.baseUrl}/admin/divitioncategory/lists`
    );

    let responseData = teamResponse.data;

    res.render("team/add_team", {
      teamData : responseData.data,
    });
  },

  detailTeam: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const teamResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/team/detail/admin/`
      );
  
      const responseData = teamResponse.data;
  
      res.render("team/detail_team", {
        teamData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  deleteTeam: async (req, res) => {
    try {
      const { id } = req.params;

      // Memanggil endpoint API untuk menghapus
      await axios.delete(`${process.env.baseUrl}/admin/${id}/team/delete`);

      res.status(200).json({
        message: "Team deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting team",
      });
    }
  },

  viewTeamCategory: async (req, res) => {
    let teamResponse = await axios.get(
      `${process.env.baseUrl}/admin/divitioncategory/lists`
    );

    let responseData = teamResponse.data;

    res.render("team/team_category", {
      teamData : responseData.data,
    });
  },

  viewPostTeamCategory: async (req, res) => {
    let teamResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let teamData = teamResponse.data;

    res.render("team/add_team_category", {
      teamData,
    });
  },

  detailTeamCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const teamResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/divitioncategory/detail`
      );
  
      const responseData = teamResponse.data;
  
      res.render("team/detail_team_category", {
        teamData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createTeamCategory: async (req, res) => {
    try {
      const {
        title,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/divitioncategory/category`, {
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
          res.render('team/add_team_category', { successMessage: 'Team Category created successfully' });
        } else {
          res.render('team/add_team_category', { errorMessage: 'Failed to create team' });
        }
    } catch (error) {
      res.render('team/add_team_category', { errorMessage: 'Error creating team' });
    }
  },

  deleteTeamCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const { token } = req.body;

      await axios.delete(`${process.env.baseUrl}/admin/${id}/divitioncategory/delete`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });

      res.status(200).json({
        message: "Divisi category deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error deleting divisi category",
      });
    }
  },

  
};
