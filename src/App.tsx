import React, {useEffect, useState} from "react";
import "./sass/style.css"
import BooksList from "./components/smart/BooksList";
import AddBookForm from "./components/simple/AddBook/AddBookForm";
import {IBook} from "./core/book";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./core/base";


function App() {
    const [booksList, setBooksList] = useState<IBook[]>([])
    const booksCollectionRef = collection(db, "books")

    /** Function of asynchronous get of books from Firebase. */
    const getBooks = async () => {
        const data = await getDocs(booksCollectionRef)
        setBooksList(data.docs.map((doc: any)=>({...doc.data(), id: doc.id}))) //TODO fix doc: any
    }

    useEffect(()=>{
        getBooks()
            .catch(console.error)
    }, [])
  return (
      <div className="container">
          <BooksList booksList={booksList}/>
          <AddBookForm updateBooks={getBooks}/>
      </div>
  );
}

export default App;
