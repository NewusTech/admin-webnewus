const router = require("express").Router();
const serviceControllers = require("../controllers/ServiceController");

router.get('/service', serviceControllers.viewService);
router.get('/service/create', serviceControllers.viewPostService);
router.post('/service/create', serviceControllers.createService);
router.get('/admin/:id/service/detail', serviceControllers.detailService);
router.get('/admin/:id/service/update', serviceControllers.viewUpdateService);
// router.post('/admin/:id/service', serviceControllers.updateService);


module.exports = router;