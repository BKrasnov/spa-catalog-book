/** type for the book */
export interface IBook{
    id: number,
    title: string,
    authors: string,
    year?: number,
    rating?: number,
    isbn?: number
}