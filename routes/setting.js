const router = require("express").Router();
const settingControllers = require("../controllers/SettingController");

router.get('/setting', settingControllers.viewSetting);
router.get('/socialmedia', settingControllers.viewSosmed);
router.get('/seo', settingControllers.viewSeo);

module.exports = router;
