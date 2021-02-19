// Passed
function getTotalBooksCount(books) {
  let totalBookCount = books.length
  return totalBookCount
}


// Passed
function getTotalAccountsCount(accounts) {
  let totalAccountsCount = accounts.length
  return totalAccountsCount
}


// Passed
function getBooksBorrowedCount(books) {
  const notReturnedBooks = books.filter((book) => book.borrows[0].returned === false)
  let borrowedBooksCount = notReturnedBooks.length
  return borrowedBooksCount
}


// My solution
function getMostCommonGenres(books) {
  // Create an empty array
  // Use a for loop, for-in-loop, or for each loop to iterate through the books array of objects
  // If the newly created array is empty (has no length) or a particular book genre cannot be found within the newly created array, then create a name variable & set it equal to a particular book genre and create a count variable & set it equal to 1
  // Create an object (using object shorthand) where the keys are the name and count variables previously created
  // Push the newly created object into the newly created array
  // If a particular book genre is found within the newly created array, then add 1 to the current count value
  // Sort the newly created array from greatest to least, in terms of count value
  // Return the an array of the 5 objects with the greatest values
  let topFiveGenres = []
  let mostCommonGenres = [] 
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < mostCommonGenres.length; j++) {
      if (mostCommonGenres.length === 0 || !mostCommonGenres.includes(books[i].genre)) { // !mostCommonGenres[j].name === books[i].genre
        let name = books[i].genre
        let count = 1
        let genre = {name, count}
        mostCommonGenres.push(genre)
      } else if (mostCommonGenres.includes(books[i].genre)) { // mostCommonGenres[j].name === books[i].genre
        mostCommonGenres[j].count += 1
      }
      mostCommonGenres.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1))
      if (topFiveGenres.length < 5) {
        topFiveGenres.push(mostCommonGenres[j])
      }
    }
  }
  return topFiveGenres
}



// Mom's Solution
function getMostCommonGenres(books) {
  // Create an empty array
  // Use a for loop, for-in-loop, or for each loop to iterate through the books array of objects
  // If the newly created array is empty (has no length) or a particular book genre cannot be found within the newly created array, then create a name variable & set it equal to a particular book genre and create a count variable & set it equal to 1
  // Create an object (using object shorthand) where the keys are the name and count variables previously created
  // Push the newly created object into the newly created array
  // If a particular book genre is found within the newly created array, then add 1 to the current count value
  // Sort the newly created array from greatest to least, in terms of count value
  // Return the an array of the 5 objects with the greatest values
  let topFiveGenres = []
  let mostCommonGenres = [] 
  for (let i = 0; i < books.length; i++) {
      if (i > 0){
      let RecordFound = 0
      for (j = 0; j < mostCommonGenres.length; j++) {
        if (mostCommonGenres[j].name.includes(books[i].genre)) {
          mostCommonGenres[j].count +=1
          RecordFound = 1
          break 
    }
  }
}
  if (i == 0 || RecordFound == 0) {
    let name = books[i].genre
    let count = 1
    let genre = {name, count} 
    mostCommonGenres.push(genre) 
  }
 
 }
 mostCommonGenres.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1))
 if (topFiveGenres.length < 5) {
   topFiveGenres.push(mostCommonGenres[j])
 }
 return topFiveGenres
}


function getMostPopularBooks(books) {

}


function getMostPopularAuthors(books, authors) {

}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};