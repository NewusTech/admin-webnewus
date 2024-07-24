const router = require("express").Router();
const legalitasControllers = require("../controllers/LegalitasController");

router.get('/company/profile', legalitasControllers.viewCompanyProfile);
router.get('/company/profile/create', legalitasControllers.viewPostCompanyProfile);

router.get('/bidang/usaha', legalitasControllers.viewBidangUsaha);
router.get('/bidang/usaha/create', legalitasControllers.viewPostBidangUsaha);

router.get('/akta/pendirian', legalitasControllers.viewAktaPendirian);
router.get('/akta/pendirian/create', legalitasControllers.viewPostAktaPendirian);

router.get('/surat/pengesahan', legalitasControllers.viewSuratPengesahan);
router.get('/suta/pendirian/create', legalitasControllers.viewPostSuratPengesahan);

module.exports = router;