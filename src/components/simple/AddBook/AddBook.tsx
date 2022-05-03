import React, {useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../../core/base";
import './add-book.css'


/** Component for adding a book */
const AddBook = () => {
    const [title, setTitle] = useState("")
    const [authors, setAuthors] = useState("")

    /** Collection of books from the Firebase */
    const booksCollectionRef = collection(db, "books")

    /** the function of adding a book */
    const addBook = async () =>{
        console.log('добавление книги')
        await addDoc(booksCollectionRef, {title, authors})
    }
    return (
        <div className="block-add-book">
            <button className="block-add-book__button-add" onClick={addBook}>Добавить книгу</button>
            <input className="block-add-book__input"
                placeholder="Title"
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <input className="block-add-book__input"
                placeholder="Authors"
                onChange={(event) => {
                    setAuthors(event.target.value);
                }}
            />
            <input className="block-add-book__input"
                   placeholder="Year"
                   onChange={(event) => {
                       setAuthors(event.target.value);
                   }}
            />
            <input className="block-add-book__input"
                   placeholder="ISBN"
                   onChange={(event) => {
                       setAuthors(event.target.value);
                   }}
            />
        </div>
    );
};

export default AddBook;