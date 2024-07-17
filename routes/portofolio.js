const router = require("express").Router();
const portoControllers = require("../controllers/PortoController");

router.get('/portofolio', portoControllers.viewPortofolio);
router.get('/portofolio/create', portoControllers.viewPostPortofolio);
router.post('/portofolio/create', portoControllers.createPortofolio);
router.get('/portofolio/detail/:slug', portoControllers.viewPostPortofolio);

router.get('/portofolio/category', portoControllers.viewPortofolioCategory);
router.get('/portofolio/category/create', portoControllers.viewPostPortofolioCategory);
router.post('/portofolio/category/create', portoControllers.createPortofolioCategory);
router.get('/portofolio/category/detail/:id', portoControllers.detailPortofolioCategory);
router.get('/admin/:id/portofolio/category', portoControllers.viewUpdatePortofolioCategory);
router.post('/admin/:id/portofolio/category/update', portoControllers.updatePortofolioCategory);

router.get('/portofolio/tag', portoControllers.viewPortofolioTag);
router.get('/portofolio/tag/create', portoControllers.viewPostPortofolioTag);
router.post('/portofolio/tag/create', portoControllers.createPortofolioTag);
router.get('/portofolio/tag/detail/:id', portoControllers.detailPortofolioTag);

module.exports = router;
