import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AddBook } from './pages/AddBook';
import { EditBook } from './pages/EditBook';
import { Library } from './pages/Library';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/list" element={<Library />} />
            <Route path="/books/create" element={<AddBook />} />
            <Route path="/books/update/:id" element={<EditBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
