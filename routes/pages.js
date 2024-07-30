const router = require("express").Router();
const pagesControllers = require("../controllers/PagesController");

router.get('/seo/pages', pagesControllers.viewPages);
router.get('/seo/pages/detail/:id', pagesControllers.detailPages);
router.get('/admin/:id/seo/pages/update', pagesControllers.viewUpdatePages);
router.post('/admin/:id/seo/pages/update', pagesControllers.updatePages);

module.exports = router;
