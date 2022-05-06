import React from 'react';
import {IBook} from "../../../core/book";
import {groupBooks} from "../../../core/service/BooksService";
import "./bookGroupsByYear.css"
import Book from "../Book/Book";

interface IBookGroupsProps {
    books: IBook[];
    updateBooks: () => Promise<void>
}

/** Component for rendering groups of books. */
const BookGroupsByYear: React.FC<IBookGroupsProps> = (props) => {
    const {books, updateBooks} = props;
    return (
        <div>
            {
                groupBooks(books).map(bookList => {
                    return (
                        <div className="book-groups">
                            <h1>{bookList.year === undefined ? "Нет года" : `Книги ${bookList.year} года`}</h1>
                            <Book books={bookList.books} updateBooks={updateBooks}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BookGroupsByYear;
