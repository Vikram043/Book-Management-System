
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}


Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

const book1 = new Book('The Alchemist', 'Paulo Coelho', 1988);
const book2 = new Book('Atomic Habits', 'James Clear', 2018);
const book3 = new Book('Clean Code', 'Robert C. Martin', 2008);


export const books = [book1, book2, book3];
