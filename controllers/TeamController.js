const axios = require("axios");

module.exports = {

  viewTeam: async (req, res) => {
    let teamResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let teamData = teamResponse.data;

    res.render("team/team", {
      teamData,
    });
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
  
  viewTeamCategory: async (req, res) => {
    let teamResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let teamData = teamResponse.data;

    res.render("team/team_category", {
      teamData,
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
};
