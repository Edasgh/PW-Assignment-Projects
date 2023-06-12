// the api link
const apiLink = "https://jsonplaceholder.typicode.com/posts";

//METHOD-1:

// the function to get data from the apiLink and retreive the list of posts to the console
async function fetchData(Link) {
  try {
    // promise to fetch data from the Link
    const result = await fetch(Link);
    const resultData = await result.json();
    if (result.status === 200) {
      // if the status is OK then log the lists to the console
      console.log(resultData);
    }

    if (result.status !== 200) {
      // if the status is Not Found then throw an error
      return new Error(
        console.log("An error occurred while fetching data"),
        console.log(result.status, result.statusText),
        console.log(resultData)
      );
    }
  } catch (error) {
    //handle the error here
    console.log(error);
  }
}

//calling the function for apiLink
fetchData(apiLink);

//METHOD-2:
fetch(apiLink)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
