import React from 'react';
import BooksList from './components/BooksList';
import EditBook from './components/EditBook';
import Modal from './components/Modal';

import './App.css';

function App() {
  return (
    <div>
      Hello world!
      <BooksList />
      <EditBook />
      <Modal />
    </div>
    
  );
}

export default App;
