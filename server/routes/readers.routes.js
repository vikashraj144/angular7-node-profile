const express = require('express');
const router = express.Router();

const readerController = require('../controllers/reader.controller');
router.get('/', readerController.getBook);

module.exports = router;