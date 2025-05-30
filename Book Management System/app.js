import { books } from './book.js';


const bookSummaries = books.map(book => book.getSummary());


console.log("Book Summaries:");
console.log(bookSummaries);
