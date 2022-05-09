import React from 'react';
import {addDoc} from "firebase/firestore";
import {booksCollectionRef} from "../../../core/base";
import './add-book.css'
import {SubmitHandler} from "react-hook-form";
import {IBook} from "../../../core/book";
import Form from "./Form"

interface IProps {
    updateBooks: () => Promise<void>;
}

/**
 * Component for adding a book.
 * @param props contains an update function.
 */
const AddBook: React.FC<IProps> = (props) => {
    const {
        updateBooks
    } = props;

    /**
     * The function of adding a book.
     * @param data taken from the form.
     */
    const onSubmit: SubmitHandler<IBook> = (data) => {
        addDoc(booksCollectionRef, {...data})
            .then(() => {
                updateBooks().catch(console.error);
            });
    }

    return (
        <div>
            <label>Be sure to enter the data!</label>
            <Form onSubmit={onSubmit}/>
        </div>
    );
};

export default AddBook;