import React from 'react';
import {IBook} from "../../../core/book";
import {groupBooks} from "../../../core/service/BooksService";
import "./bookGroupsByYear.css"
import Book from "../Book/Book";

interface IBookGroupsProps {
    books: IBook[];
    updateBooks: () => Promise<void>
}

/** Component for rendering groups of books.
 * @param props contains an update function and a list of books */
const BookGroupsByYear: React.FC<IBookGroupsProps> = (props) => {
    const {books, updateBooks} = props;
    return (
        <div>
            {
                groupBooks(books).map((bookList, id) => {
                    return (
                        <div className="book-groups">
                            <h1>{bookList.year === undefined ? "No year" : `Books of ${bookList.year}`}</h1>
                                <Book key={id} books={bookList.books} updateBooks={updateBooks}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BookGroupsByYear;
