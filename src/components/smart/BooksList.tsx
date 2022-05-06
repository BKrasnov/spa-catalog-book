import React from 'react';
import Book from "../simple/Book/Book";
import {IBook} from "../../core/book";


interface IBooksListProps {
    booksList: IBook[];
    updateBooks: () => Promise<void>
}

/** The BooksList component. */
const BooksList: React.FC<IBooksListProps> = (props) => {
    const {booksList, updateBooks} = props
    return (
        <div className="books">
            {
                booksList.map(book => {
                    return (
                        <Book updateBooks={updateBooks} book={book} key={book.id}/>
                    )
                })
            }
        </div>
    );
};

export default BooksList;