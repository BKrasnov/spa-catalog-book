import React from 'react';
import './sass/style.css'
import BooksList from "./components/smart/BooksList";
import {IBook} from "./core/book";


function App() {
    const books: IBook[] = [{
        name: 'Отцы и дети', authors: 'Тургенев',
    }]
  return (
      <div className="container">
          <BooksList books={books}/>
      </div>
  );
}

export default App;
