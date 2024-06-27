const router = require("express").Router();
const indexControllers = require("../controllers/IndexController");

router.get("/table", indexControllers.viewIndex);
router.get('/setting', indexControllers.viewSetting);

module.exports = router;
