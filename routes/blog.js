const router = require("express").Router();
const blogControllers = require("../controllers/BlogController");

router.get('/blog', blogControllers.viewBlog);
router.get('/blog/create', blogControllers.viewPostBlog);
router.get('/admin/:slug/blog/detail', blogControllers.detailBlog);
router.get('/admin/blog/update/:id', blogControllers.viewUpdateBlog);
router.post('/admin/:id/blog', blogControllers.updateBlog);
router.delete('/admin/blog/delete/:id', blogControllers.deleteBlog);

router.get('/blog/category', blogControllers.viewBlogCategory);
router.get('/blog/category/create', blogControllers.viewPostBlogCategory);
router.get('/admin/kategoriblog/get/:id', blogControllers.detailBlogCategory);
router.post('/blog/category/create', blogControllers.createBlogCategory);
router.get('/admin/:id/blog/category', blogControllers.viewUpdateBlogCategory);
router.post('/admin/:id/blog/category/update', blogControllers.updateBlogCategory);
router.delete('/admin/kategoriblog/delete/:id', blogControllers.deleteBlogCategory);

router.get('/blog/tag', blogControllers.viewBlogTag);
router.get('/blog/tag/create', blogControllers.viewPostBlogTag);
router.get('/admin/tagblog/get/:id', blogControllers.detailBlogTag);
router.post('/blog/tag/create', blogControllers.createBlogTag);
router.get('/admin/blog/delete/:id', blogControllers.viewUpdateBlogTag);
router.post('/admin/:id/blog/tag/update', blogControllers.updateBlogTag);
router.delete('/admin/tagblog/delete/:id', blogControllers.deleteBlogTag);

router.post('/blogggg', blogControllers.createBlog);

router.get('/blog/rekomendasi', blogControllers.viewBlogRecomendation);
router.get('/blog/rekomendasi/create', blogControllers.viewPostBlogRecomendation);

module.exports = router;
