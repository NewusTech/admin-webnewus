const router = require("express").Router();
const kebijakanControllers = require("../controllers/KebijakanController");

router.get('/term/condition', kebijakanControllers.viewTermCondition);
router.get('/admin/:id/tnc/update', kebijakanControllers.viewUpdateTermCondition);
router.post('/admin/:id/tnc/update', kebijakanControllers.updateTermCondition);
router.delete('/admin/:id/tnc/delete', kebijakanControllers.deleteTermCondition);

router.get('/privacy/policy', kebijakanControllers.viewPrivacyPolicy);
router.get('/admin/:id/privacy/policy/update', kebijakanControllers.viewUpdatePrivacyPolicy);
router.post('/admin/:id/privacy/policy/update', kebijakanControllers.updatePrivacyPolicy);
router.delete('/admin/:id/privacy/policy/delete', kebijakanControllers.deletePrivacyPolicy);

module.exports = router;