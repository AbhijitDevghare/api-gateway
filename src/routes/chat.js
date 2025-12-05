const { Router } = require('express');
const proxy = require('express-http-proxy');

const router = Router();

// Forward everything under /chat to chat-service
router.use('/', proxy('http://localhost:3003/chat')); // change port as needed

module.exports = router;
