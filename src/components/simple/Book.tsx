import React from 'react';
import '../../sass/book.css'


const Book = () => {
    return (
        <div className="book">
            <img src="" alt="" className="book__image"/>
            <div className="book__description">
                <div className="book__name">Отцы и дети</div>
                <div className="book__author">И.С. Тургенев</div>
                <div className="book__rating">10/10</div>
            </div>
        </div>
    );
};

export default Book;