const router = require("express").Router();
const messageControllers = require("../controllers/MessageController");

router.get('/message', messageControllers.viewMessage);

module.exports = router;

