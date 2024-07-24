const router = require("express").Router();
const settingControllers = require("../controllers/SettingController");

router.get('/setting', settingControllers.viewSetting);
router.post('/admin/:id/setting/update', settingControllers.updateSetting);

router.get('/socialmedia', settingControllers.viewSosmed);
router.get('/seo', settingControllers.viewSeo);


module.exports = router;
