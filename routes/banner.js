const router = require("express").Router();
const bannerControllers = require("../controllers/BannerController");

router.get('/banner', bannerControllers.viewBanner);
router.get('/banner/create', bannerControllers.viewPostBanner);
router.get('/admin/:id/banner/detail', bannerControllers.detailBanner);
router.get('/admin/:id/banner/update', bannerControllers.viewUpdateBanner);
router.post('/admin/:id/banner', bannerControllers.updateBanner);
router.delete('/admin/:id/banner/delete', bannerControllers.deleteBanner);


module.exports = router;