const router = require("express").Router();
const whyUsControllers = require("../controllers/WhyUsController");

router.get('/whyUs', whyUsControllers.viewWhyUs);
router.get('/whyUs/create', whyUsControllers.viewPostWhyUs);
router.post('/whyUs/create', whyUsControllers.createWhyUs);
router.get('/admin/:id/whyUs/detail', whyUsControllers.detailWhyUs);



module.exports = router;