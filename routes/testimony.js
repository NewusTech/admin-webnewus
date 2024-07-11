const router = require("express").Router();
const testimonyControllers = require("../controllers/TestimonyController");

router.get('/testimony', testimonyControllers.viewTestimony);
router.get('/testimony/create', testimonyControllers.viewPostTestimony);
router.post('/testimony/create', testimonyControllers.createTestimony);
// router.get('/admin/:id/testimony/detail', testimonyControllers.detailTestimony);

module.exports = router;