import React from 'react';
import BooksList from './components/BooksList';
import EditBook from './components/EditBook';
import Modal from './components/Modal';

import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      Hello world from app!
      <BooksList />
      <EditBook />
      <Modal />
    </Router>
      
  );
}

export default App;
