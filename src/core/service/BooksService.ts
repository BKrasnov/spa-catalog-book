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
export function groupBooks(booksList: IBook[]) {
    const years = Array.from(new Set(booksList.map(book => book.year)));
    years.sort((prevYear, nextYear)=>nextYear-prevYear)
    booksList.sort(compare)
    return years.map(year => {
        const years = year ? {year: year} : null;
        return {
            ...years,
            books: booksList.filter(book => book.year === year)
        };
    });
}