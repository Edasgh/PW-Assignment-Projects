//the apiString to fetch data from
const apiStr= "https://jsonplaceholder.typicode.com/todos/1"


// the function for fetching any api link
const fetchApi=async(apiLink)=>{
    // trycatch block to handle error
    try {
        // fetching data asynchronously
        const resultData= await fetch(apiLink)
        const getData=await resultData.json()
        // printing the statusCode and statusText to the console
         if(resultData.status===200){
             console.log("Response status code : ",resultData.status)
             console.log("Response status Text : ",resultData.statusText)
             console.log(getData)
             
             
            }
             
            // creating new error if the status isn't OK
            if(resultData.status!==200){
               return new Error(
                console.log("An error occurred while fetching data"),
                    console.log("Error status code : ",resultData.status),
                    console.log("Error status Text : ",resultData.statusText),
                    console.log(getData)
                   
                )
            }
    } catch (error) {
        //hadling error in catch block
        console.log(error)
    }
}






// calling the function for apiStr link
fetchApi(apiStr);

