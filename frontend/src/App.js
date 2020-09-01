import React, {useState, useEffect} from 'react';
import BooksList from './components/BooksList';
import ModalBook from './components/ModalBook';
import EditBook from './components/EditBook';

import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // States for BooksList
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeItemName, setActiveItemName] = useState('');
  const [activeItemDesc, setActiveItemDesc] = useState('');
  const [activeItemId, setActiveItemId] = useState('');

  // State for ModalBook
  const [openModalEdit, setOpenModalEdit] = useState(false);

  // Functions for BooksList and EditBook
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function for ModalBook and EditBook
  const handleOpenModalEdit = () => setOpenModalEdit(true);
  const handleCloseModalEdit = () => setOpenModalEdit(false);

  // Function for BooksList and EditBook
  const openModalWithItem = (item) => {
    handleOpen();
    setActiveItemName(item.title);
    setActiveItemDesc(item.description);
    setActiveItemId(item._id);
  }

  // Function for ModalBook
  const editModal = (item) => {
    handleOpenModalEdit();
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
        editModal={editModal}
      />
      <ModalBook 
        openModalEdit={openModalEdit}
        activeItemName={activeItemName}
        activeItemDesc={activeItemDesc}
        activeItemId={activeItemId}
        handleCloseModalEdit={handleCloseModalEdit}
        editModal={editModal}
      />
      <EditBook 
        openModalWithItem={openModalWithItem}
        open={open}
        activeItemName={activeItemName}
        activeItemDesc={activeItemDesc}
        handleClose={handleClose}
      />
    </Router>
  );
}

export default App;
