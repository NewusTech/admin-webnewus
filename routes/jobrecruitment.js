const router = require("express").Router();
const jobrecruitmentControllers = require("../controllers/JobRecruitmentController");

router.get('/jobrecruit', jobrecruitmentControllers.viewJobRecruitment);
router.get('/jobrecruit/create', jobrecruitmentControllers.viewPostJobRecruitment);
router.post('/jobrecruit/create', jobrecruitmentControllers.createJobRecruitment);
router.get('/jobrecruit/detail/:id', jobrecruitmentControllers.detailJobRecruitment);

router.get('/jobrecruit/category', jobrecruitmentControllers.viewJobRecruitmentCategory);
router.get('/jobrecruit/category/create', jobrecruitmentControllers.viewPostJobRecruitmentCategory);
router.post('/jobrecruit/category/create', jobrecruitmentControllers.createJobRecruitmentCategory);
router.get('/jobrecruit/category/detail/:id', jobrecruitmentControllers.detailJobRecruitmentCategory);

module.exports = router;