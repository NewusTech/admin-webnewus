const router = require("express").Router();
const blogControllers = require("../controllers/BlogController");

router.get('/blog', blogControllers.viewBlog);
router.get('/blog/create', blogControllers.viewPostBlog);
router.get('/admin/:slug/blog/detail', blogControllers.detailBlog);

router.get('/blog/category', blogControllers.viewBlogCategory);
router.get('/blog/category/create', blogControllers.viewPostBlogCategory);
router.get('/admin/kategoriblog/get/:id', blogControllers.detailBlogCategory);
router.post('/blog/category/create', blogControllers.createBlogCategory);

router.get('/blog/tag', blogControllers.viewBlogTag);
router.get('/blog/tag/create', blogControllers.viewPostBlogTag);
router.get('/admin/tagblog/get/:id', blogControllers.detailBlogTag);
router.post('/blog/tag/create', blogControllers.createBlogTag);

router.post('/blogggg', blogControllers.createBlog);

module.exports = router;
