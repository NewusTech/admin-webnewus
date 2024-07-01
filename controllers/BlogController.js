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

  
  detailBlog: async (req, res) => {
    try {
      const { slug } = req.params;
  
      // Panggil API dengan parameter slug
      const blogResponse = await axios.get(
        `https://api-services.newus.id/api/admin/${slug}/blog/detail`
      );
  
      const responseData = blogResponse.data;
  
      res.render("blog/detail_blog", {
        blogData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
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
        token,
      } = req.body;
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
        token,
      }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201) {
          res.render('blog/add_blog', { successMessage: 'Blog created successfully' });
        } else {
          res.render('blog/add_blog', { errorMessage: 'Failed to create blog' });
        }
    } catch (error) {
      res.render('blog/add_blog', { errorMessage: 'Error creating blog' });
    }
  },
  
};