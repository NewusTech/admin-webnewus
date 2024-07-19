const router = require("express").Router();
const whyUsControllers = require("../controllers/WhyUsController");

router.get('/whyUs', whyUsControllers.viewWhyUs);
router.get('/whyUs/create', whyUsControllers.viewPostWhyUs);
router.post('/whyUs/create', whyUsControllers.createWhyUs);
router.get('/admin/:id/whyUs/detail', whyUsControllers.detailWhyUs);
router.get('/admin/:id/whyus/update', whyUsControllers.viewUpdateWhyUs);
router.post('/admin/:id/whyus', whyUsControllers.updateWhyUs);
router.delete('/admin/:id/whyus/delete', whyUsControllers.deleteWhyUs);


module.exports = router;