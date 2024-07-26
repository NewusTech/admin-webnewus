const router = require("express").Router();
const settingControllers = require("../controllers/SettingController");

router.get('/setting', settingControllers.viewSetting);
router.post('/admin/:id/setting/update', settingControllers.updateSetting);

router.get('/social/media', settingControllers.viewSosmed);
router.put('/admin/:id/social/media/update', settingControllers.updateSosmed);

router.get('/seo', settingControllers.viewSEO);
// router.post('/admin/:id/seo/update', settingControllers.updateSEO);


module.exports = router;
