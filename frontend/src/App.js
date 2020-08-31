import React, {useState, useEffect} from 'react';
import BooksList from './components/BooksList';
import EditBook from './components/EditBook';
import Modal from './components/Modal';

import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // States for BooksList
  const [books, setBooks] = useState([]);

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
      <EditBook />
      <Modal />
    </Router>
      
  );
}

export default App;
