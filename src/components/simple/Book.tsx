import React from 'react';
import '../../sass/book.css'
import {IBook} from "../../core/book";


interface BookProps{
    book: IBook;
}
/** The Book component */
const Book: React.FC<BookProps> = (props) => {
    const {
        book : { name, authors}
    } = props;
    return (
        <div className="book">
            <img src="" alt="" className="book__image"/>
            <div className="book__description">
                <div>{name}</div>
                <div>{authors}</div>
                <div>1823 год</div>
                <div>10/10</div>
                <div>ISBN</div>
            </div>
        </div>
    );
};

export default Book;