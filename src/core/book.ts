/** type for the book. */
export interface IBook{

    /** Book id. */
    readonly id: number,

    /** Title of the book. */
    title: string,

    /** The authors of the book. */
    authors: string,

    /** Year of publication of the book. */
    year: number,

    /** Book rating. */
    rating: number,

    /** ISBN book. */
    readonly isbn: number
}

