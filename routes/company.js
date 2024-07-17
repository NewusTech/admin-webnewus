const router = require("express").Router();
const companyControllers = require("../controllers/CompanyController");

router.get('/company', companyControllers.viewCompany);

router.get('/company/create', companyControllers.viewPostCompany);
router.get('/admin/:id/company', companyControllers.viewUpdateCompany);
router.post('/admin/:id/company/update', companyControllers.updateCompany);

module.exports = router;
