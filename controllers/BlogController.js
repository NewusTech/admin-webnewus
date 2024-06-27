const axios = require("axios");

module.exports = {

  viewBlog: async (req, res) => {
    let blogResponse = await axios.get(
      "https://api-services.newus.id/api/admin/blog/get"
    );

    let responseData = blogResponse.data;

    res.render("blog/blog", {
      blogData : responseData.data,
    });
  },

  viewPostBlog: async (req, res) => {
    let blogResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let blogData = blogResponse.data;

    res.render("blog/add_blog", {
      blogData,
    });
  },

  viewBlogCategory: async (req, res) => {
    let blogResponse = await axios.get(
      "https://api-services.newus.id/api/admin/kategoriblog/get"
    );

    let responseData = blogResponse.data;

    res.render("blog/blog_category", {
      blogData : responseData.data,
    });
  },

  viewPostBlogCategory: async (req, res) => {
    let blogResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let blogData = blogResponse.data;

    res.render("blog/add_blog_category", {
      blogData,
    });
  },

  viewBlogTag: async (req, res) => {
    let blogResponse = await axios.get(
      "https://api-services.newus.id/api/admin/tagblog/get"
    );

    let responseData = blogResponse.data;

    res.render("blog/blog_tag", {
      blogData : responseData.data,
    });
  },

  viewPostBlogTag: async (req, res) => {
    let blogResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    let blogData = blogResponse.data;

    res.render("blog/add_blog_tag", {
      blogData,
    });
  },

  
  createBlog: async (req, res) => {
    try {
      const {
        title,
        slug,
        keyword,
        excerpt,
        body,
        kategoriblog_id,
        tagblog_id,
        user_id,
        publishAt,
        image,
        status,
      } = req.body;

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcxOTM4Mzg3NCwiZXhwIjoxNzE5NDcwMjc0fQ.gXp_jacDdvrTlWx3N4PxKevrSzMPtwZs4tdVIO9KmIc"; // Ganti dengan token Bearer Anda

      const response = await axios.post('https://api-services.newus.id/api/admin/blog/create', {
        title,
        slug,
        keyword,
        excerpt,
        body,
        kategoriblog_id,
        tagblog_id,
        user_id,
        publishAt,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        image,
        status,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

      if (response.status === 200) {
        res.redirect('/blog'); // Ganti dengan rute yang sesuai setelah berhasil membuat blog
      } else {
        res.render('blog/add_blog', { error: 'Failed to create blog' });
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      res.render('blog/add_blog', { error: 'Error creating blog' });
    }
  },
  
};