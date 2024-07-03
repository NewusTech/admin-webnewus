const router = require("express").Router();
const jobrecruitmentControllers = require("../controllers/JobRecruitmentController");

router.get('/jobrecruit', jobrecruitmentControllers.viewJobRecruitment);
router.get('/jobrecruit/create', jobrecruitmentControllers.viewPostJobRecruitment);
router.get('/jobrecruit/detail/:id', jobrecruitmentControllers.detailJobRecruitment);

router.get('/jobrecruit/category', jobrecruitmentControllers.viewJobRecruitmentCategory);
router.get('/jobrecruit/category/create', jobrecruitmentControllers.viewPostJobRecruitmentCategory);
router.get('/jobrecruit/category/detail/:id', jobrecruitmentControllers.detailJobRecruitmentCategory);

module.exports = router;