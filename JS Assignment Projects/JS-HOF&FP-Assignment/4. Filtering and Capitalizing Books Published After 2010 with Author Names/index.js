// array of all books
let books=[
    {
        //books are saved as an object of author and year of publish
        author:"author1",
        publishedIn:2009
    },
    {
        author:"author2",
        publishedIn:2018
    },
    {
        author:"author3",
        publishedIn:2007
    },
    {
        author:"author4",
        publishedIn:2004
    },
    {
        author:"author5",
        publishedIn:2012
    },
    {
        author:"author6",
        publishedIn:2010
    },
    {
        author:"author7",
        publishedIn:2019
    },
    {
        author:"author8",
        publishedIn:2014
    },
    {
        author:"author9",
        publishedIn:2000
    },
    {
        author:"author10",
        publishedIn:2005
    },
    {
        author:"author11",
        publishedIn:2013
    },
]

// function to filter the books array
function FilterAndCapitalize(array){
    // the modified array where the books array is filtered to find the books published after 2010
    let modifiedArray=array.filter(element=>{
        // find the books published after 2010s
    if(element.publishedIn>2010){
        // convert the authors' name to uppercase
        element.author=element.author.toUpperCase();
        // pass the modified-author's name and the modified year of publish to the new array
       return element.author && element.publishedIn
     }
    })
  // returning the modified array
    return modifiedArray
}
let BooksAfter2010=FilterAndCapitalize(books) //passing the books array to the function
console.log(BooksAfter2010); // printing the modified array
