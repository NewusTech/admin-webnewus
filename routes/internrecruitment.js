const router = require("express").Router();
const internrecruitmentControllers = require("../controllers/InternRecruitmentController");

router.get('/intern-recruit', internrecruitmentControllers.viewInternRecruitment);
router.get('/intern-recruit/create', internrecruitmentControllers.viewPostInternRecruitment);
router.get('/admin/:id/intern-recruitment', internrecruitmentControllers.viewUpdateInternRecruitment);
router.post('/admin/:id/intern-recruitment/update', internrecruitmentControllers.updateInternRecruitment);
router.delete('/admin/:id/internrecruitment/delete', internrecruitmentControllers.deleteInternRecruitment);

module.exports = router;