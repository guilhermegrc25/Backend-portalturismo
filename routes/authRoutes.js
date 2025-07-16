const express = require('express');
const router = express.Router();
const auth = require('../controllers/authControllers')

router.post('/login', auth.login)

module.exports = router;