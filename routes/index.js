const router = require("express").Router();
const indexControllers = require("../controllers/IndexController");

router.get("/dashboard", indexControllers.viewIndex);
router.get('/setting', indexControllers.viewSetting);

module.exports = router;
