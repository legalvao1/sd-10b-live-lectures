const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King'
}

const bookAuthor = {
  authorName: 'J. R. R. Tolkien',
  collection: 'The Lord of the Infinity'
}

// console.log(books);

Object.assign(books, bookAuthor);

console.log(books);

const booksClone = Object.assign({}, books);

// console.log(booksClone);