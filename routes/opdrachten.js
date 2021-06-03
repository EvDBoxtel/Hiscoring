const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//Pages
router.get('/bewegenbeleven', (req, res) => res.render('bewegenbeleven'));

module.exports = router;