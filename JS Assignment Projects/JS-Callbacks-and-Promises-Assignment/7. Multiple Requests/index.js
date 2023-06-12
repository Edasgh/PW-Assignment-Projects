// two api links to add in the function
const todoApiLink = "https://jsonplaceholder.typicode.com/todos/1";
const postApiLink = "https://jsonplaceholder.typicode.com/posts/1";

//METHOD-1:
async function fetchApi(todoApiLink, postApiLink) {
  try {
    // fetching two datas asynchronously
    const todoResult = await fetch(todoApiLink);
    const getTodoData = await todoResult.json();
    const postResult = await fetch(postApiLink);
    const getPostData = await postResult.json();

    // object to return
    const returnObject = { todo: getTodoData, post: getPostData };
    if (todoResult.status === 200 && postResult.status === 200) {
      // if the status is OK
      console.log(returnObject);
    }

    if ((todoResult.status !== 200) | (postResult.status !== 200)) {
      // if the status is Not Found
      return new Error(
        console.log("An error occurred while fetching data"),
        console.log(todoResult.status, todoResult.statusText),
        console.log(postResult.status, postResult.statusText),
        console.log(returnObject)
      );
    }
  } catch (error) {
    // handle the error in catch
    console.log(error);
  }
}

// calling the function for these two links
fetchApi(todoApiLink, postApiLink);

//METHOD-2 :
async function getCombinedData(link1, link2) {
  const [data1, data2] = await Promise.all([
    fetch(link1).then((response) => response.json()),
    fetch(link2).then((response) => response.json()),
  ]);

  const combinedData = {
    todo: data1,
    post: data2,
  };

  return combinedData;
}

getCombinedData(todoApiLink, postApiLink).then((data) => console.log(data));
