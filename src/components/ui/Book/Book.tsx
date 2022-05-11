import React, {useState} from 'react';
import {IBook} from '../../../core/book';
import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../../core/base';
import '../../ui/Book/book.css'
import Modal from '../../simple/Modal/Modal'


interface BookProps{
    book: IBook;
    updateBooks: () => Promise<void>
}

const Book: React.FC<BookProps> = (props) => {
    const {
        book, updateBooks
    } = props;
    const [modalActive, setModalActive] = useState(false)

    /** Book deletion function. */
    const deleteBook = (id: any) => {
        const bookDoc = doc(db, 'books', id);
        deleteDoc(bookDoc).then(() => {
            updateBooks().catch(console.error);
        });
    };

    return (
        <>
            <div className='book'>
                <div className='book__description'>
                    <div>{book.title === undefined || null ? 'Нет данных' : book.title}</div>
                    <div>{book.authors === undefined || null ? 'Нет данных' : book.authors}</div>
                    <div>{book.year === undefined || null ? 'Нет данных' : book.year}</div>
                    <div>{book.rating === undefined || null ? 'Нет данных' : book.rating}</div>
                    <div>{book.isbn === undefined || null ? 'Нет данных' : book.isbn}</div>
                </div>
                <button className='book__button-update' onClick={() => {
                    setModalActive(true)
                }}>Edit
                </button>
                <button className='book__button-delete' onClick={() => {
                    deleteBook(book.id)
                }}>X
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive} book={book} updateBooks={updateBooks}/>
        </>
    );
};

export default Book;