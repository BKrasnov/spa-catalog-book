import React from 'react';
import {IBook} from "../../../core/book";
import {selectRecommendedBook} from "../../../core/service/BooksService";
import Book from "../../ui/Book/Book";


interface BookProps {
    books: IBook[];
    updateBooks: () => Promise<void>;
}

/**
 * Book Recommended Component.
 * @param props contains an update function and a list of books.
 */
const BookRecommended: React.FC<BookProps> = (props) => {
    const {
        books, updateBooks
    } = props;
    const bookRecommended = selectRecommendedBook(books);

    return (
        <>
            {books.length ? (
                <>
                    <h1>We recommend you to read</h1>
                    <Book key={bookRecommended.id} book={bookRecommended} updateBooks={updateBooks}/>
                </>
            ) : ("Загрузка...")}
        </>
    );
};


export default BookRecommended;