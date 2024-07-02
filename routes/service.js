const router = require("express").Router();
const serviceControllers = require("../controllers/ServiceController");

router.get('/service', serviceControllers.viewService);
router.get('/service/create', serviceControllers.viewPostService);
router.get('/admin/:id/service/detail', serviceControllers.detailService);

module.exports = router;