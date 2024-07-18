const axios = require("axios");

module.exports = {

  viewMessage: async (req, res) => {
    let messageResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let messageData = messageResponse.data;

    res.render("history/message", {
      messageData,
    });
  },

  viewHistoryJob: async (req, res) => {
    let historyResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/history/get"
      `${process.env.baseUrl}/admin/jobrecruitmenthistory/lists`,
    );

    let responseData = historyResponse.data;

    res.render("history/history_job", {
      historyData : responseData.data,
    });
  },

  viewPostHistoryJob: async (req, res) => {
    let historyResponse = await axios.get(
      `${process.env.baseUrl}/admin/jobcategory/lists`
    );
    let responseData = historyResponse.data;

    res.render("history/history_job", {
      historyData : responseData.data,
    });
  },

  viewHistoryIntern: async (req, res) => {
    let historyResponse = await axios.get(
      `${process.env.baseUrl}/admin/internhistory/lists`,
    );

    let responseData = historyResponse.data;

    res.render("history/history_intern", {
      historyData : responseData.data,
    });
  },

  viewPostHistoryIntern: async (req, res) => {
    let historyResponse = await axios.get(
      `${process.env.baseUrl}/admin/internhistory/new-history`
    );
    let responseData = historyResponse.data;

    res.render("history/history_job", {
      historyData : responseData.data,
    });
  },

  
};
