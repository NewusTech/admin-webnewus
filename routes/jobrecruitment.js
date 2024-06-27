const router = require("express").Router();
const jobrecruitmentControllers = require("../controllers/JobRecruitmentController");

router.get('/jobrecruit', jobrecruitmentControllers.viewJobRecruitment);

router.get('/jobrecruit/create', jobrecruitmentControllers.viewPostJobRecruitment);

router.get('/jobrecruit/category', jobrecruitmentControllers.viewJobRecruitmentCategory);

router.get('/jobrecruit/category/create', jobrecruitmentControllers.viewPostJobRecruitmentCategory);

module.exports = router;