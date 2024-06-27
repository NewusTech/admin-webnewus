const router = require("express").Router();
const serviceControllers = require("../controllers/ServiceController");

router.get('/service', serviceControllers.viewService);

router.get('/service/create', serviceControllers.viewPostService);

module.exports = router;