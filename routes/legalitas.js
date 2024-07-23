const router = require("express").Router();
const legalitasControllers = require("../controllers/LegalitasController");

router.get('/company/profile', legalitasControllers.viewCompanyProfile);
router.get('/company/profile/create', legalitasControllers.viewPostCompanyProfile);

router.get('/bidang/usaha', legalitasControllers.viewBidangUsaha);
router.get('/bidang/usaha/create', legalitasControllers.viewPostBidangUsaha);

module.exports = router;