const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const app = express();







//Pages
router.get('/bewegenbeleven', (req, res) => res.render('views/bewegenbeleven'));

module.exports = router;