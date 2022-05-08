import React from 'react';
import {IBook} from "../../../core/book";
import {composeBooks} from "../../../core/service/BooksService";
import "./bookGroupsByYear.css"
import BookList from "../BookList/BookList";


interface IBookGroupsProps {
    books: IBook[];
    updateBooks: () => Promise<void>;
}

/**
 * Component for rendering groups of books.
 * @param props contains an update function and a list of books
 */
const BookGroupsByYear: React.FC<IBookGroupsProps> = (props) => {
    const {
        books, updateBooks
    } = props;
    const groupedBooks = composeBooks(books);

    return (
        <div>
            {
                groupedBooks.map(bookList => {
                    return (
                        <div className="book-groups">
                            <h1>{bookList.year === undefined ? "No year" : `Books of ${bookList.year}`}</h1>
                            <BookList books={bookList.books} updateBooks={updateBooks}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default BookGroupsByYear;
