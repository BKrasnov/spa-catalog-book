import React from 'react';
import Book from "../simple/Book/Book";
import {IBook} from "../../core/book";


interface IBooksListProps {
    booksList: IBook[];
}

/** The BooksList component. */
const BooksList: React.FC<IBooksListProps> = (props) => {
    const {booksList} = props
    return (
        <div className="books">
            {
                booksList.map(book => {
                    return (
                        <Book book={book} key={book.id}/>
                    )
                })
            }
        </div>
    );
};

export default BooksList;