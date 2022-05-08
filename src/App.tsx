import React, {useEffect, useState} from "react";
import "./sass/style.css"
import AddBookForm from "./components/simple/AddBook/AddBookForm";
import {IBook} from "./core/book";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./core/base";
import BookGroupsByYear from "./components/simple/BookGroupsByYear/BookGroupsByYear";
import BookRecommended from "./components/simple/BookRecommended/BookRecommended";


function App() {
    const [books, setBooks] = useState<IBook[]>([])
    const booksCollectionRef = collection(db, "books")

    /** Function of asynchronous get of books from Firebase. */
    const getBooks = async () => {
        const data = await getDocs(booksCollectionRef)
        setBooks(data.docs.map((doc: any)=>({...doc.data(), id: doc.id}))) //TODO fix doc: any
    }

    useEffect(()=>{
        getBooks()
            .catch(console.error)
    }, [])
    return (
        <div className="container">
            <BookRecommended books={books} updateBooks={getBooks}/>
            <div className="flex">
                <BookGroupsByYear books={books} updateBooks={getBooks}/>
                <AddBookForm updateBooks={getBooks}/>
            </div>
        </div>
    );
}

export default App;
