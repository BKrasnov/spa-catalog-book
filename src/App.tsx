import React from "react";
import "./sass/style.css"
import BooksList from "./components/smart/BooksList";
import AddBook from "./components/simple/AddBook/AddBook";


function App() {

  return (
      <div className="container">
          <BooksList/>
          <AddBook/>
      </div>
  );
}

export default App;
