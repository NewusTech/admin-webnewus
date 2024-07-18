const router = require("express").Router();
const historyControllers = require("../controllers/HistoryController");

router.get('/message', historyControllers.viewMessage);
router.get('/history', historyControllers.viewHistoryJob);
router.get('/history/intern', historyControllers.viewHistoryIntern);
module.exports = router;

