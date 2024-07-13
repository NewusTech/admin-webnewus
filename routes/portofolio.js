const router = require("express").Router();
const portoControllers = require("../controllers/PortoController");

router.get('/portofolio', portoControllers.viewPortofolio);
router.get('/portofolio/create', portoControllers.viewPostPortofolio);
router.post('/portofolio/create', portoControllers.createPortofolio);
router.get('/portofolio/detail/:slug', portoControllers.viewPostPortofolio);

router.get('/portofolio/category', portoControllers.viewPortofolioCategory);
router.get('/portofolio/category/create', portoControllers.viewPostPortofolioCategory);
router.get('/portofolio/category/detail/:id', portoControllers.detailPortofolioCategory);

router.get('/portofolio/tag', portoControllers.viewPortofolioTag);
router.get('/portofolio/tag/create', portoControllers.viewPostPortofolioTag);
router.get('/portofolio/tag/detail/:id', portoControllers.detailPortofolioTag);

module.exports = router;
