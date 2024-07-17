const axios = require("axios");

module.exports = {

  viewBlog: async (req, res) => {
    let blogResponse = await axios.get(
      // "https://api-services.newus.id/api/admin/blog/get"
      `${process.env.baseUrl}/admin/blog/get`,
    );

    let responseData = blogResponse.data;

    res.render("blog/blog", {
      blogData : responseData.data,
    });
  },

  viewPostBlog: async (req, res) => {
    let blogResponse = await axios.get(
      `${process.env.baseUrl}/admin/kategoriblog/get`
    );

    let tagResponse = await axios.get(
      `${process.env.baseUrl}/admin/tagblog/get`
    );

    let responseData = blogResponse.data;
    let responseDataTag = tagResponse.data;

    res.render("blog/add_blog", {
      blogData : responseData.data,
      tagData : responseDataTag.data,
    });
  },
  
  detailBlog: async (req, res) => {
    try {
      const { slug } = req.params;
  
      // Panggil API dengan parameter slug
      const blogResponse = await axios.get(
        `${process.env.baseUrl}/admin/${slug}/blog/detail`
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
      const response = await axios.post(`${process.env.baseUrl}/admin/blog/create`, {
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
  
  viewBlogCategory: async (req, res) => {
    let blogResponse = await axios.get(
      `${process.env.baseUrl}/admin/kategoriblog/get`
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

  detailBlogCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const blogResponse = await axios.get(
        `${process.env.baseUrl}/admin/kategoriblog/get/${id}`
      );
  
      const responseData = blogResponse.data;
  
      res.render("blog/detail_blog_category", {
        blogData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createBlogCategory: async (req, res) => {
    try {
      const {
        title,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/kategoriblog/create`, {
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
          res.render('blog/add_blog_category', { successMessage: 'Blog category created successfully' });
        } else {
          res.render('blog/add_blog_category', { errorMessage: 'Failed to create blog category' });
        }
    } catch (error) {
      res.render('blog/add_blog_category', { errorMessage: 'Error creating blog category' });
    }
  },

  viewUpdateBlogCategory: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const blogResponse = await axios.get(
        `${process.env.baseUrl}/admin/kategoriblog/get/${id}`
      );
  
      const responseData = blogResponse.data;
  
      res.render("blog/edit_blog_category", {
        blogData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateBlogCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, token } = req.body;
  
      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/kategoriblog/update/${id}`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (updateResponse.status === 200) {
        res.render('blog/edit_blog_category', {
          successMessage: 'Category updated successfully',
          blogData: updateResponse.data.data 
        });
      } else {
        res.render('blog/edit_blog_category', {
          errorMessage: 'Failed to update category',
          blogData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating category:', error.message);
      res.render('blog/edit_blog_category', {
        errorMessage: 'Internal Server Error',
        blogData: req.body
      });
    }
  },
  
  viewBlogTag: async (req, res) => {
    let blogResponse = await axios.get(
      `${process.env.baseUrl}/admin/tagblog/get`
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

  detailBlogTag: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const blogResponse = await axios.get(
        `${process.env.baseUrl}/admin/tagblog/get/${id}`
      );
  
      const responseData = blogResponse.data;
  
      res.render("blog/detail_blog_tag", {
        blogData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  createBlogTag: async (req, res) => {
    try {
      const {
        title,
        token,
      } = req.body;
      const response = await axios.post(`${process.env.baseUrl}/admin/tagblog/create`, {
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
          res.render('blog/add_blog_tag', { successMessage: 'Blog tag created successfully' });
        } else {
          res.render('blog/add_blog_tag', { errorMessage: 'Failed to create blog tag' });
        }
    } catch (error) {
      res.render('blog/add_blog_tag', { errorMessage: 'Error creating blog tag' });
    }
  },

  viewUpdateBlogTag: async (req, res) => {
    try {
      const { id } = req.params;
  
      // Panggil API dengan parameter id
      const blogResponse = await axios.get(
        `${process.env.baseUrl}/admin/tagblog/get/${id}`
      );
  
      const responseData = blogResponse.data;
  
      res.render("blog/edit_blog_tag", {
        blogData: responseData.data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Terjadi kesalahan pada server");
    }
  },

  updateBlogTag: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, token } = req.body;
  
      let updateResponse = await axios.put(
        `${process.env.baseUrl}/admin/tagblog/update/${id}`,
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
  
      if (updateResponse.status === 200) {
        res.render('blog/edit_blog_tag', {
          successMessage: 'Tag updated successfully',
          blogData: updateResponse.data.data 
        });
      } else {
        res.render('blog/edit_blog_tag', {
          errorMessage: 'Failed to update tag',
          blogData: req.body
        });
      }
    } catch (error) {
      console.error('Error updating tag:', error.message);
      res.render('blog/edit_blog_tag', {
        errorMessage: 'Internal Server Error',
        blogData: req.body
      });
    }
  },

  
  
  
};