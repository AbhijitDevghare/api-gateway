const { Router } = require('express');
const proxy = require('express-http-proxy');

const router = Router();

// Forward everything under /chat to chat-service
router.use('/', proxy('http://chat-service:3003')); // change port as needed

module.exports = router;
