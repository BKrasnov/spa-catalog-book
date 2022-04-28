import React from 'react';
import './sass/style.css'
import Book from "./components/simple/Book";

function App() {
  return (
      <div className="container">
          <div className="books">
              <Book/>
          </div>
      </div>
  );
}

export default App;
