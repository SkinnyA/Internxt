import React, {useState, useEffect} from 'react';
import BooksList from './components/BooksList';
import ModalBook from './components/ModalBook';
import Modal from './components/Modal';

import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // States for BooksList
  const [books, setBooks] = useState([]);

  // States for EditBook
  const [open, setOpen] = useState(false);
  const [activeItemName, setActiveItemName] = useState('');
  const [activeItemDesc, setActiveItemDesc] = useState('');
  const [activeItemId, setActiveItemId] = useState('');

  // Functions for EditBook
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openModalWithItem = (item) => {
    handleOpen();
    setActiveItemName(item.title);
    setActiveItemDesc(item.description);
    setActiveItemId(item._id);
  }

  // Retrieve books from api/db
  useEffect(() => {
    const getBooks = async () => {
      const url = 'http://localhost:8000/api/books';
      const response = await fetch(url);
      const result = await response.json();
      setBooks(result);
    }
    getBooks();
  }, [])

  return (
    <Router>
      <BooksList 
        books={books}
        openModalWithItem={openModalWithItem}
      />
      <ModalBook 
        books={books}
        open={open}
        activeItemName={activeItemName}
        activeItemDesc={activeItemDesc}
        activeItemId={activeItemId}
        handleClose={handleClose}
        // handleOpen={handleOpen}
        openModalWithItem={openModalWithItem}
      />
      {/* <Modal /> */}
    </Router>
      
  );
}

export default App;
