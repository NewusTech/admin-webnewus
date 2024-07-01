var express = require('express');
var router = express.Router();
const userControllers = require("../controllers/UserController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userControllers.viewProfile);
router.get('/login', userControllers.viewLogin);
router.get('/forgot-pass', userControllers.viewForgotPass);
router.get('/reset-pass', userControllers.viewResetPass);

router.post("/login/process", userControllers.login);

module.exports = router;
