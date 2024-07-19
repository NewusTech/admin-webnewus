const router = require("express").Router();
const teamControllers = require("../controllers/TeamController");

router.get('/team', teamControllers.viewTeam);
router.get('/team/create', teamControllers.viewPostTeam);
router.get('/admin/:id/team/detail', teamControllers.detailTeam);
router.get('/admin/:id/team/update', teamControllers.viewUpdateTeam);
router.post('/admin/:id/team', teamControllers.updateTeam);
router.delete('/admin/:id/team/delete', teamControllers.deleteTeam);

router.get('/teamCategory', teamControllers.viewTeamCategory);
router.get('/team/category/create', teamControllers.viewPostTeamCategory);
router.post('/team/category/create', teamControllers.createTeamCategory);
router.get('/team/category/detail/:id', teamControllers.detailTeamCategory);
router.get('/admin/:id/team/category', teamControllers.viewUpdateTeamCategory);
router.post('/admin/:id/team/category/update', teamControllers.updateTeamCategory);
router.delete('/admin/:id/divitioncategory/delete', teamControllers.deleteTeamCategory);

module.exports = router;
