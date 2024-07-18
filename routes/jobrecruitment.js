const router = require("express").Router();
const jobrecruitmentControllers = require("../controllers/JobRecruitmentController");

router.get('/jobrecruit', jobrecruitmentControllers.viewJobRecruitment);
router.get('/jobrecruit/create', jobrecruitmentControllers.viewPostJobRecruitment);
router.post('/jobrecruit/create', jobrecruitmentControllers.createJobRecruitment);
router.get('/jobrecruit/detail/:id', jobrecruitmentControllers.detailJobRecruitment);

router.get('/jobrecruit/category', jobrecruitmentControllers.viewJobRecruitmentCategory);
router.get('/jobrecruit/category/create', jobrecruitmentControllers.viewPostJobRecruitmentCategory);
router.get('/admin/:id/job/category', jobrecruitmentControllers.viewUpdateJobCategory);
router.post('/admin/:id/job/category/update', jobrecruitmentControllers.updateJobCategory);

module.exports = router;