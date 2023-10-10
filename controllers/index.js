const router = require('express').Router();
// const apiRoutes = require(''); //get ./api routes here
const homeRoutes = require('./homeRoutes'); //get ./homeRoutes here

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;