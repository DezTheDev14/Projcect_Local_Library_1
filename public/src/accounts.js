// Passed
function findAccountById(accounts, id) {
  const specificAccount = accounts.find((account) => account.id === id)
  return specificAccount
}


// Passed
function sortAccountsByLastName(accounts) {
  const lastNameSort = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
  return lastNameSort
}


// Passed
function getTotalNumberOfBorrows(account, books) {
  let borrowCounter = 0
  for (let i = 0; i < books.length; i++) {
    let book = books[i]
    for (let j = 0; j < book.borrows.length; j++) {
      if (book.borrows[j].id === account.id) {
        borrowCounter += 1
      }
    }
  }
  return borrowCounter
}


// Passed
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessedByAccount = []
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      let book = books[i]
      let author = authors[j]
      if (book.borrows[0].id === account.id && book.borrows[0].returned === false) {
        if (author.id === book.authorId) {
          let bookAndAuthor = {...book, author}
          booksPossessedByAccount.push(bookAndAuthor)
        } 
      }
    }
  }
  return booksPossessedByAccount
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};