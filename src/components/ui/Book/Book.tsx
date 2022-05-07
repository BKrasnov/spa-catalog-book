import React from 'react';
import {IBook} from "../../../core/book";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../../core/base";
import '../../ui/Book/book.css'

interface BookProps{
    book: IBook;
    updateBooks: () => Promise<void>
}
const Book: React.FC<BookProps> = (props) => {
    const {
        book, updateBooks
    } = props;
    /** book deletion function. */
    const deleteBook = async (id: any) => { // TODO fix any TODO fix async/await
        const bookDoc = doc(db, "books", id)
        await deleteDoc(bookDoc)
        await updateBooks()
    }
    return (
        <div className="book">
            <div className="book__description">
                <div>{book.title === undefined ? 'Нет данных' : book.title}</div>
                <div>{book.authors === undefined ? 'Нет данных' : book.authors}</div>
                <div>{book.year === undefined ? 'Нет данных' : book.year}</div>
                <div>{book.rating === undefined ? 'Нет данных' : book.rating}</div>
                <div>{book.isbn === undefined ? 'Нет данных' : book.isbn}</div>
            </div>
            <button onClick={() => {
                deleteBook(book.id).catch(console.error)
            }}>X
            </button>
        </div>
    );
};

export default Book;