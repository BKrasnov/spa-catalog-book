import React from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../../core/base";
import './add-book.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {IBook} from "../../../core/book";


interface IProps{
    updateBooks: () => Promise<void>
}

/** Component for adding a book
 * @param props has function for update data*/
const AddBookForm: React.FC<IProps> = (props) => {
    const {updateBooks} = props

    /** Collection of books from the Firebase */
    const booksCollectionRef = collection(db, "books")

    /** The function of adding a book. */
    const onSubmit: SubmitHandler<IBook> = (data) => {
        addDoc(booksCollectionRef, {...data})
            .then(()=>{updateBooks().catch(console.error)})
    }

    /** objects for working with react-hook-form */
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IBook>({
        mode: "onChange"
    })

    return (
        <div>
            <label>Be sure to enter the data!</label>
            <form onSubmit={handleSubmit(onSubmit)} className="form-adding-book">  {/* TODO fix duplication input*/}
                <input
                    placeholder="Title"
                    {...register("title", {
                        required: true,
                    })}
                />
                <input
                    placeholder="Authors"
                    {...register("authors", {
                        required: true,
                    })}
                />
                <input
                    placeholder="Year"
                    {...register("year", {
                        required: true,
                    })}
                />
                <input
                    placeholder="Isbn"
                    {...register("isbn", {
                        required: true,
                        pattern: {
                            value: /\b(?:ISBN(?:: ?| ))?((?:97[89])?\d{9}[\dx])\b/i,
                            message: "Enter a 10-digit ISBN"
                        }
                    })}
                />
                {errors?.isbn && (<div className="errors">{errors.isbn.message}</div>)}
                <input type="submit" disabled={!isValid}/>
            </form>
        </div>
    );
};

export default AddBookForm;