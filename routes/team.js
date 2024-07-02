const router = require("express").Router();
const teamControllers = require("../controllers/TeamController");

router.get('/team', teamControllers.viewTeam);
router.get('/team/create', teamControllers.viewPostTeam);
router.get('/admin/:id/client/detail', teamControllers.detailTeam);

router.get('/team/category', teamControllers.viewTeamCategory);
router.get('/team/category/create', teamControllers.viewPostTeamCategory);

module.exports = router;
