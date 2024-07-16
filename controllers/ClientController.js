const axios = require("axios");

module.exports = {

  viewClient: async (req, res) => {
    let clientResponse = await axios.get(
      `${process.env.baseUrl}/admin/client/get`
    );

    let responseData = clientResponse.data;

    res.render("client/client", {
      clientData : responseData.data,
    });
  },

  viewPostClient: async (req, res) => {
    let clientResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let clientData = clientResponse.data;

    res.render("client/add_client", {
      clientData,
    });
  },

  detailClient: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const clientResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/client/detail`
      );
  
      const responseData = clientResponse.data;
  
      res.render("client/detail_client", {
        clientData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  viewUpdateClient: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const clientResponse = await axios.get(
        `${process.env.baseUrl}/admin/${id}/client/detail`
      );
  
      const responseData = clientResponse.data;
  
      res.render("client/edit_client", {
        clientData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateClient: async (req, res) => {
    try {
      const id = req.params.id;
      const clientData = req.body;

      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/${id}/client/update`,
        clientData
      );

      if (updateResponse.status === 200) {
        res.redirect('/client');
      } else {
        res.status(400).send('Failed to update client data');
      }
    } catch (error) {
      console.error('Error updating client data:', error);
      res.status(500).send('Internal Server Error');
    }
  },

};