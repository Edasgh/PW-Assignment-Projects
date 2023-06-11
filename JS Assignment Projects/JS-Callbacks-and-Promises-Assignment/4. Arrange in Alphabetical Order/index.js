// list of books

const listOfBooks = [
  {
    title: "Arithmetical Problems",
    author: "Author1",
    YearOfPublication: 2009,
  },
  {
    title: "Biblical Principles",
    author: "Author1",
    YearOfPublication: 2000,
  },
  {
    title: "Quick Recipes",
    author: "Author1",
    YearOfPublication: 2010,
  },
  {
    title: "Linear Algebra",
    author: "Author2",
    YearOfPublication: 2012,
  },
  {
    title: "Calculus",
    author: "Author3",
    YearOfPublication: 2010,
  },
  {
    title: "Python for beginners",
    author: "Author4",
    YearOfPublication: 2004,
  },
  {
    title: "Eloquent JavaScript",
    author: "Author5",
    YearOfPublication: 2008,
  },
  {
    title: "Differential Calculus",
    author: "Author6",
    YearOfPublication: 2005,
  },
];

//sorting the array of titles alphabetically
function sortTitles(arrOfTitles){
  arrOfTitles.sort(function(a,b){
    if(a>b){
      return 1
    }

    if(a<b){
      return -1
    }

    return 0
  })

  console.log(arrOfTitles)
}

// function for sorting the array of books and logging titles to the console
function alphabeticalOrderOfBooks(arrayOfBooks,callBackFn) {
  const listOfBookTitles=arrayOfBooks.map(book=>{
    return book.title
  })

 callBackFn(listOfBookTitles)

}

// calling the function of listOfBooks array
alphabeticalOrderOfBooks(listOfBooks , sortTitles);
