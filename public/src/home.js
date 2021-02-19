function getTotalBooksCount(books) {
  let totalBookCount = books.length
  return totalBookCount
}


function getTotalAccountsCount(accounts) {
  let totalAccountsCount = accounts.length
  return totalAccountsCount
}


function getBooksBorrowedCount(books) {
  // Helper function
  function getBorrowedBooks(books) {
    const notReturnedBooks = books.filter((book) => book.borrows[0].returned === false)
    return notReturnedBooks
  }
  let borrowedBooks = getBorrowedBooks(books)
  const borrowedBookNames = borrowedBooks.map((borrowedBook) => borrowedBook.title)
  let borrowedBooksCount = borrowedBookNames.length
  return borrowedBooksCount
}


function getMostCommonGenres(books) {
  let topFiveGenres = []
  let mostCommonGenres = []
  let recordFound = 0
  for (let i = 0; i < books.length; i++) {
    if (mostCommonGenres.length > 0) {
      for (let j = 0; j < mostCommonGenres.length; j++) {
        if (mostCommonGenres[j].name.includes(books[i].genre)) {
          mostCommonGenres[j].count += 1
          recordFound = 1
        }
      }
    } if (mostCommonGenres.length === 0 || recordFound === 0) {
      let name = books[i].genre
      let count = 1
      let genre = {name, count}
      mostCommonGenres.push(genre)
    }
  }
  mostCommonGenres.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1))
  for (let k = 0; k < mostCommonGenres.length; k++) {
    if (topFiveGenres.length < 5) {
      topFiveGenres.push(mostCommonGenres[k])
    }
  }
  return topFiveGenres
}


function getMostPopularBooks(books) {
  let topFiveBooks = []
  let mostPopularBooks = []
  for (let i = 0; i < books.length; i++) {
    let name = books[i].title
    let count = books[i].borrows.length
    let popularBook = {name, count}
    mostPopularBooks.push(popularBook)
  }
  mostPopularBooks.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
  for (let j = 0; j < mostPopularBooks.length; j++) {
    if (topFiveBooks.length < 5) {
      topFiveBooks.push(mostPopularBooks[j])
    }
  }
  return topFiveBooks
}


function getMostPopularAuthors(books, authors) {
  let topFiveAuthors = []
  let mostPopularAuthors = []
  for (let i = 0; i < authors.length; i++) {
    let author = authors[i]
    for (let j = 0; j < books.length; j++) {
      let book = books[j]
      if (author.id === book.authorId) {
        let name = `${author.name.first} ${author.name.last}`
        let count = book.borrows.length
        let popularAuthor = {name, count}
        mostPopularAuthors.push(popularAuthor)
      }
    }
  }
  mostPopularAuthors.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1))
  for (let k = 0; k < mostPopularAuthors.length; k++) {
    if (topFiveAuthors.length < 5) {
      topFiveAuthors.push(mostPopularAuthors[k])
    }
  }
  return topFiveAuthors
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
