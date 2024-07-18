const router = require("express").Router();
const historyControllers = require("../controllers/HistoryController");

router.get('/message', historyControllers.viewMessage);
router.get('/history', historyControllers.viewHistoryJob);
module.exports = router;

