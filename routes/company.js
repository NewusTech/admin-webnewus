const router = require("express").Router();
const companyControllers = require("../controllers/CompanyController");

router.get('/company', companyControllers.viewCompany);

router.get('/company/create', companyControllers.viewPostCompany);

module.exports = router;
