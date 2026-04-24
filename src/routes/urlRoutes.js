const express = require('express')
const router = express.Router();
const { shortenUrl, redirectUrl, getStats } = require('../controllers/urlController')
router.post('/shorten',shortenUrl)
router.get('/stats/:shortCode',getStats)
router.get('/:shortCode',redirectUrl)


module.exports = router