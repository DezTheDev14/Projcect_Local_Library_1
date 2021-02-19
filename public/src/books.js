function findAuthorById(authors, id) {
  const specificAuthor = authors.find((author) => author.id === id)
  return specificAuthor
}


function findBookById(books, id) {
  const specificBook = books.find((book) => book.id === id)
  return specificBook
}


function partitionBooksByBorrowedStatus(books) {
  let partitionedBooks = []
  const notReturnedBooks = books.filter((book) => book.borrows[0].returned === false)
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true)
  partitionedBooks.push(notReturnedBooks, returnedBooks)
  return partitionedBooks
}


function getBorrowersForBook(book, accounts) {
  let borrowersForBook = []
  for (let i = 0; i < book.borrows.length; i++) {
    for (let j = 0; j < accounts.length; j++) {
      if (book.borrows[i].id === accounts[j].id && borrowersForBook.length < 10) {
        let account = accounts[j]
        let returned = book.borrows[i].returned
        let borrowerInfo = {...account, returned}
        borrowersForBook.push(borrowerInfo)
      }
    }
  }
  return borrowersForBook
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
