import React from 'react';
import './book.css'
import {IBook} from "../../../core/book";
import {db} from "../../../core/base";
import {deleteDoc, doc} from "firebase/firestore";

interface BookProps{
    book: IBook;
}

/** book deletion function */
const deleteBook = async (id: any) =>{
    const bookDoc = doc(db, "books", id)
    await deleteDoc(bookDoc)
}

/** The Book component */
const Book: React.FC<BookProps> = (props) => {
    const {
        book : {title, authors, year, rating}
    } = props;
    return (
        <div className="book">
            <div className="book__description">
                <div>{title === undefined ? 'Нет данных' : title}</div>
                <div>{authors === undefined ? 'Нет данных' : authors}</div>
                <div>{year === undefined ? 'Нет данных' : year}</div>
                <div>{rating === undefined ? 'Нет данных' : rating}</div>
                <div>ISBN</div>
            </div>
            <button onClick={()=>{deleteBook(props.book.id).catch(console.error)}}>X</button>
        </div>
    );
};

export default Book;