import React from 'react';
import {IBook} from '../../../core/book';
import Book from '../../ui/Book/Book'


interface BookListProps{
    books: IBook[];
    updateBooks: () => Promise<void>;
}

/**
 * The BookList component.
 * @param props contains an update function and a list of books
 */
const BookList: React.FC<BookListProps> = (props) => {
    const {
        books, updateBooks
    } = props;

    return (
        <>
            {
                books.map(book => {
                    return (
                        <Book key={book.id} book={book} updateBooks={updateBooks}/>
                    );
                })
            }
        </>
    );
};

export default BookList;