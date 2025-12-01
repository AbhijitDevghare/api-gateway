const { Router } = require('express');
const proxy = require('express-http-proxy');

const router = Router();
router.use('/', proxy('http://engagement-service:3004'));
module.exports = router;
