const {Router} = require('express');
const router = Router();

const {getBooks, updateBooks, getBook, updateBook, postBook, deleteBook} = require('../controllers/books.controller');

router.route('/')
    .get(getBooks)
    .post(postBook)
    // .patch() to edit one parameter, for example only the title

router.route('/:id')
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook)

module.exports = router;