//api link
const link="https://jsonplaceholder.typicode.com/posts/123456789"

//function to fetch data
async function fetchData(link){
    try {
        //fetching data
        const response=await fetch(link);
        const data=await response.json();
        
        if(response.status===200){
            // if the status is OK
            console.log(data)
        }else{
            // if the status isn't OK
            new Error(
                console.log("An error ocurred while fetching data"),
                console.log(response.status,response.statusText,data)
            )
        }


    } catch (error) {
        //handle the error here
        console.log(error)
    }
}

//calling the function for link
fetchData(link)