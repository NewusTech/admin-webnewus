const router = require("express").Router();
const internrecruitmentControllers = require("../controllers/InternRecruitmentController");

router.get('/intern-recruit', internrecruitmentControllers.viewInternRecruitment);

router.get('/intern-recruit/create', internrecruitmentControllers.viewPostInternRecruitment);

module.exports = router;