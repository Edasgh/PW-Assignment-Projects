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


//METHOD-1:
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




//METHOD-2:
//for sorting the titles alphabetically
function logTitles(titles){
  titles.sort();
  console.log(titles.join(", "))
}

//extract titles from each book object and callback to sort the titles alphabetically
function extractTitles(books,callBackFn){
  const titles=books.map((book)=>book.title);
  callBackFn(titles)
}

extractTitles(listOfBooks,logTitles) // the list will not remain an array anymore | in this sort method