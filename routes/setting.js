const router = require("express").Router();
const settingControllers = require("../controllers/SettingController");

router.get('/setting', settingControllers.viewSetting);
router.get('/admin/:id/setting', settingControllers.viewUpdateSetting);
router.post('/admin/:id/setting/update', settingControllers.updateSetting);

router.get('/socialmedia', settingControllers.viewSosmed);
router.get('/seo', settingControllers.viewSeo);


module.exports = router;
