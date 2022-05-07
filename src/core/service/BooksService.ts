import {IBook} from "../book";


/** The function of sorting books by title. */
function compare(a: IBook, b: IBook) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA > titleB) {
        return 1
    }
    if (titleA < titleB) {
        return -1
    }
    return 0
}

/** Book grouping function. */
export function groupBooks(books: IBook[]) {
    const years = Array.from(new Set(books.map(book => book.year)));
    years.sort((prevYear, nextYear)=>nextYear-prevYear)
    books.sort(compare)
    return years.map(year => {
        const years = year ? {year: year} : null;
        return {
            ...years,
            books: books.filter(book => book.year === year)
        };
    });
}

/** The function of filtering books by year. */
function filter(value: number){
    if(2022 - value >= 3){
        return value
    }
}
/** Recommended books search function. */
export function selectRecommendedBook(books: IBook[]){
    const max = books.reduce((acc, val) => (filter(val.year) && val.rating > acc ? val.rating : acc), 0);
    const booksRecommended = books.filter(book => {
            const differenceBetweenYears = 2022 - book.year
            if (differenceBetweenYears >= 3 && book.rating === max) {
                return book
            }
            return false
        })
    const bookRecommended = Math.floor(Math.random() * booksRecommended.length)
    return(booksRecommended[bookRecommended])
}