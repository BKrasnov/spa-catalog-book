import React, {useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../core/base";

/** Component for adding a book */
const AddBook = () => {
    const [title, setTitle] = useState("")
    const [authors, setAuthors] = useState("")

    /** Collection of books from the Firebase */
    const booksCollectionRef = collection(db, "books")

    /** the function of adding a book */
    const addBook = async () =>{
        await addDoc(booksCollectionRef, {title, authors})
    }
    return (
        <div>
            <button onClick={addBook}>Добавить кнопку</button>
            <input
                placeholder="Title"
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <input
                placeholder="Authors"
                onChange={(event) => {
                    setAuthors(event.target.value);
                }}
            />
        </div>
    );
};

export default AddBook;