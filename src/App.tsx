import React, {useEffect, useState} from 'react';
import './sass/style.css'
import {IBook} from './core/book';
import {getDocs} from 'firebase/firestore';
import {booksCollectionRef} from "./core/base";
import AddBook from './components/simple/AddBook/AddBook';
import BookGroupsByYear from './components/simple/BookGroupsByYear/BookGroupsByYear';
import BookRecommended from './components/simple/BookRecommended/BookRecommended';


function App() {
    const [books, setBooks] = useState<IBook[]>([]);

    /** Function of asynchronous get of books from Firebase. */
    const getBooks = async () => {
        const data = await getDocs(booksCollectionRef)
        setBooks(data.docs.map((doc: any ) => ({...doc.data(), id: doc.id})))
    };

    useEffect(() => {
        getBooks()
            .catch(console.error)
    }, []);

    return (
        <div className='container'>
            <BookRecommended books={books} updateBooks={getBooks}/>
            <div className='flex'>
                <BookGroupsByYear books={books} updateBooks={getBooks}/>
                <AddBook updateBooks={getBooks}/>
            </div>
        </div>
    );
}

export default App;
