const axios = require("axios");

module.exports = {

  viewTeam : async (req, res) => {
    try {
      const teamResponse = await axios.get(`${process.env.baseUrl}/admin/team/lists`);
      const teamData = Array.isArray(teamResponse.data) ? teamResponse.data : [];
  
      res.render('team/team', {
        teamData,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Terjadi kesalahan pada server');
    }
  },

  viewPostTeam: async (req, res) => {
    let teamResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let teamData = teamResponse.data;

    res.render("team/add_team", {
      teamData,
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
  
};
