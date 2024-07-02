const router = require("express").Router();
const galeriControllers = require("../controllers/GaleriController");

router.get('/galeri', galeriControllers.viewGaleri);
router.get('/galeri/create', galeriControllers.viewPostGaleri);
router.get('/galeri/detail/:id', galeriControllers.detailGaleri);



module.exports = router;
