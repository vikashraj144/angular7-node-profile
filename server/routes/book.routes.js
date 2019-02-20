const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');
router.get('/', bookController.getBook);
router.put('/updateBook', bookController.updateBook);
router.post('/addBook', bookController.addBook);
router.delete('/deleteBook', bookController.deleteBook);

module.exports = router;