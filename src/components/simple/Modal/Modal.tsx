import React, {Dispatch, SetStateAction, useState} from 'react';
import './modal.css';
import {IBook} from '../../../core/book';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../../../core/base';


interface ModalProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    book: IBook;
    updateBooks: () => Promise<void>;
}

/**
 * Modal window for changing data.
 * @param props contains a useState hook for modal window activity, update function and a book
 */
const Modal: React.FC<ModalProps> = (props) => {
    const {
        active, setActive, book, updateBooks
    } = props;
    const [value, setValue] = useState<IBook>({
        id: book.id,
        title: book.title,
        authors: book.authors,
        year: book.year,
        rating: book.rating,
        isbn: book.isbn,
    });
    const {title, authors, year, rating} = value;

    /** data modification function */
    const handleChange = (name: string) => (e: { preventDefault: () => void; target: { value: any; }; }) => {
        e.preventDefault()
        setValue({...value, [name]: e.target.value})
    };

    /** The function of updating the book data. */
    const editBookData = (id: any) => {
        const bookDoc = doc(db, 'books', id);
        updateDoc(bookDoc, {
            title: title,
            authors: authors,
            year: year,
            rating: rating
        }).then(() => {
            updateBooks().catch(console.error);
        });
    };

    return (
        <div>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    <input
                        placeholder='Title'
                        name='title'
                        autoComplete='off'
                        onChange={handleChange('title')}
                    />
                    <input
                        type='text'
                        placeholder='Authors book'
                        name='authors'
                        autoComplete='off'
                        onChange={handleChange('authors')}
                    />
                    <input
                        type='text'
                        placeholder='Year book'
                        name='year'
                        autoComplete='off'
                        onChange={handleChange('year')}
                    />
                    <input
                        type='text'
                        placeholder='Rating book'
                        name='rating'
                        autoComplete='off'
                        onChange={handleChange('rating')}
                    />
                    <button onClick={() => {
                        editBookData(book.id)
                        setActive(false)
                    }}>Change Data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

