const router = require("express").Router();
const skillControllers = require("../controllers/SkillController");

router.get('/skill', skillControllers.viewSkill);
router.get('/skill/create', skillControllers.viewPostSkill);
router.post('/skill/create', skillControllers.createSkill);
router.get('/admin/:id/skill/detail', skillControllers.detailSkill);

module.exports = router;