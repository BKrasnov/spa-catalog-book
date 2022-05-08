import {IBook} from "../book";


/** The function of comparing books by name. */
function compareTitle(prev: IBook, next: IBook ) {
    const nextTitle = next.title.toUpperCase();
    const prevTitle = prev.title.toUpperCase();
    if (prevTitle > nextTitle) {
        return 1;
    }
    if (prevTitle < nextTitle) {
        return -1;
    }
    return 0;
}

/**
 * Books grouping function.
 * @param books book collection.
 */
export function composeBooks(books: IBook[]) {
    const years = Array.from(new Set(books.map(book => book.year)));
    years.sort((prevYear, nextYear) => nextYear - prevYear);
    books.sort(compareTitle);
    return years.map(year => {
        const years = year ? {year: year} : null;
        return {
            ...years,
            books: books.filter(book => book.year === year),
        };
    });
}

/**
 * The function of filtering books by year.
 * @param yearPublication year of publication of the book.
 */
function filterYears(yearPublication: number) {
    const currentYear = 2022;
    if (currentYear - yearPublication >= 3) {
        return yearPublication;
    }
    return false;
}

/**
 * Recommended books search function.
 * @param books book collection.
 */
export function selectRecommendedBook(books: IBook[]) {
    const maxRating = books
        .reduce((acc, val) => (filterYears(val.year) && val.rating > acc ? val.rating : acc), 0);
    const booksRecommended = books
        .filter(book => {
            if (filterYears(book.year) >= 3 && book.rating === maxRating) {
                return book
            }
            return false
        });
    const bookRecommended = Math.floor(Math.random() * booksRecommended.length);
    return (booksRecommended[bookRecommended]);
}