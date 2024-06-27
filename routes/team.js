const router = require("express").Router();
const teamControllers = require("../controllers/TeamController");

router.get('/team', teamControllers.viewTeam);
router.get('/team/create', teamControllers.viewPostTeam);

router.get('/team/category', teamControllers.viewTeamCategory);
router.get('/team/category/create', teamControllers.viewPostTeamCategory);

module.exports = router;
