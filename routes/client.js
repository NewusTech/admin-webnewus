const router = require("express").Router();
const clientControllers = require("../controllers/ClientController");

router.get('/client', clientControllers.viewClient);
router.get('/client/create', clientControllers.viewPostClient);
router.get('/admin/:id/client/detail', clientControllers.detailClient);
router.get('/admin/:id/client/update', clientControllers.viewUpdateClient);
router.post('/admin/:id/client', clientControllers.updateClient);


module.exports = router;