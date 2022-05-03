import React from "react";
import "./sass/style.css"
import BooksList from "./components/smart/BooksList";
import AddBookForm from "./components/simple/AddBook/AddBookForm";


function App() {

  return (
      <div className="container">
          <BooksList/>
          <AddBookForm/>
      </div>
  );
}

export default App;
