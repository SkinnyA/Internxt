const booksCtrl = {};

const Book = require('../models/Book');

 // Return every Book stored in the database as an array
booksCtrl.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books)
}

// Post a new book
booksCtrl.postBook = async (req, res) => {
    const { title, description } = req.body;
    const newBook = new Book({
        title: title,
        description: description
    })
    await newBook.save();
    res.json({message: 'Book Posted'})
}

// Get an specific book matched by id
booksCtrl.getBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book)
}

// Delete a book based on id
booksCtrl.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.json({message: 'Book Deleted'})
}

// Update a book based on id
booksCtrl.updateBook = async (req, res) => {
    const {title, description} = req.body;
    await Book.findOneAndUpdate({_id: req.params.id}, {
        title,
        description
    });
    res.json({message: 'Book Updated'})
}

module.exports = booksCtrl;