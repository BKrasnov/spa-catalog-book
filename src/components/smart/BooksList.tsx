import React, {useEffect, useState} from 'react';
import Book from "../simple/Book";
import {IBook} from "../../core/book";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../core/base";


/** The BooksList component */
const BooksList = () => {
    const [booksList, setBooksList] = useState<IBook[]>([])
    const booksCollectionRef = collection(db, "books")

    /** Function of asynchronous get of books from Firebase */
    useEffect(()=>{
        const getBooks = async () => {
            const data = await getDocs(booksCollectionRef)
            setBooksList(data.docs.map((doc: any)=>({...doc.data()})))
        }
        getBooks()
    })
    return (
        <div className="books">
            {
                booksList.map(book => {
                    return (
                        <Book book={book}/>
                    )
                })
            }
        </div>
    );
};

export default BooksList;