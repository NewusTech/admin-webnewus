const router = require("express").Router();
const teamControllers = require("../controllers/TeamController");

router.get('/team', teamControllers.viewTeam);
router.get('/team/create', teamControllers.viewPostTeam);
router.get('/admin/:id/client/detail', teamControllers.detailTeam);

router.get('/teamCategory', teamControllers.viewTeamCategory);
router.get('/team/category/create', teamControllers.viewPostTeamCategory);
router.post('/team/category/create', teamControllers.createTeamCategory);
router.get('/team/category/detail/:id', teamControllers.detailTeamCategory);
router.delete('/admin/:id/divitioncategory/delete', teamControllers.deleteTeamCategory);

module.exports = router;
