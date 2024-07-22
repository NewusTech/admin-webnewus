const router = require("express").Router();
const portoControllers = require("../controllers/PortoController");

router.get('/portofolio', portoControllers.viewPortofolio);
router.get('/portofolio/create', portoControllers.viewPostPortofolio);
router.post('/portofolio/create', portoControllers.createPortofolio);
router.get('/portofolio/detail/:slug', portoControllers.viewPostPortofolio);
router.get('/admin/:slug/portfolio/update', portoControllers.viewUpdatePortofolio);
router.post('/admin/:id/portfolio', portoControllers.updatePortofolio);
router.delete('/admin/:id/portfolio/deleted', portoControllers.deletePortofolio);

router.get('/portofolio/category', portoControllers.viewPortofolioCategory);
router.get('/portofolio/category/create', portoControllers.viewPostPortofolioCategory);
router.post('/portofolio/category/create', portoControllers.createPortofolioCategory);
router.get('/portofolio/category/detail/:id', portoControllers.detailPortofolioCategory);
router.get('/admin/:id/portofolio/category', portoControllers.viewUpdatePortofolioCategory);
router.post('/admin/:id/portofolio/category/update', portoControllers.updatePortofolioCategory);
router.delete('/admin/kategoriportofolio/delete/:id', portoControllers.deletePortofolioCategory);

router.get('/portofolio/tag', portoControllers.viewPortofolioTag);
router.get('/portofolio/tag/create', portoControllers.viewPostPortofolioTag);
router.post('/portofolio/tag/create', portoControllers.createPortofolioTag);
router.get('/portofolio/tag/detail/:id', portoControllers.detailPortofolioTag);
router.get('/admin/:id/portofolio/tag', portoControllers.viewUpdatePortofolioTag);
router.post('/admin/:id/portofolio/tag/update', portoControllers.updatePortofolioTag);
router.delete('/admin/tagportofolio/delete/:id', portoControllers.deletePortofolioTag);

router.get('/portofolio/tech', portoControllers.viewPortofolioTechnology);
router.get('/portofolio/tech/create', portoControllers.viewPostPortofolioTechnology);
router.post('/portofolio/tech/create', portoControllers.createPortofolioTechnology);
router.get('/admin/:id/portofolio/tech/update', portoControllers.viewUpdatePortofolioTechnology);
router.post('/admin/:id/portofolio/tech', portoControllers.updatePortofolioTechnology);


module.exports = router;
