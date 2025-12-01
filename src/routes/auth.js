const { Router } = require('express');
const proxy = require('express-http-proxy');

const router = Router();

router.use('/', proxy('http://auth-service:3001'));   

module.exports = router;
