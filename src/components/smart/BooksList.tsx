import React, {FC} from 'react';
import Book from "../simple/Book";
import {IBook} from "../../core/book";


interface BooksProps {
    books: IBook[]
}
/** The BooksList component */
const BooksList: FC<BooksProps> = ({books}) => {
    return (
        <div className="books">
            {
                books.map(props => {
                    return (
                        <Book book={props}/>
                    )
                })
            }
        </div>
    );
};

export default BooksList;