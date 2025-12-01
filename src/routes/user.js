const { Router } = require('express');
const proxy = require('express-http-proxy');

const router = Router();

// Forward everything under /users to user-service
router.use('/', proxy('http://user-service:3002'));   // change URL as needed

module.exports = router;
