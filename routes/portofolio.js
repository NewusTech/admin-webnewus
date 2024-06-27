const router = require("express").Router();
const portoControllers = require("../controllers/PortoController");

router.get('/portofolio', portoControllers.viewPortofolio);
router.get('/portofolio/create', portoControllers.viewPostPortofolio);

router.get('/portofolio/category', portoControllers.viewPortofolioCategory);
router.get('/portofolio/category/create', portoControllers.viewPostPortofolioCategory);

router.get('/portofolio/tag', portoControllers.viewPortofolioTag);
router.get('/portofolio/tag/create', portoControllers.viewPostPortofolioTag);

module.exports = router;
