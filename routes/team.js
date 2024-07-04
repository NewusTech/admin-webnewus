const router = require("express").Router();
const teamControllers = require("../controllers/TeamController");

router.get('/team', teamControllers.viewTeam);
router.get('/team/create', teamControllers.viewPostTeam);
router.get('/admin/:id/client/detail', teamControllers.detailTeam);

router.get('/team/category', teamControllers.viewTeamCategory);
router.get('/team/category/create', teamControllers.viewPostTeamCategory);
router.post('/team/category/create', teamControllers.createTeamCategory);
router.get('/team/category/detail/:id', teamControllers.detailTeamCategory);

module.exports = router;
