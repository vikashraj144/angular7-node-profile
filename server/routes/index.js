const express = require('express');
const router = express.Router();

const bookRoutes = require('./book.routes');
const readerRoutes = require('./readers.routes')

router.use('/api/books', bookRoutes);
router.use('/api/readers', readerRoutes);

module.exports = router;
