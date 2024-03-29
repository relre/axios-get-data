import axios from "axios";

async function getData(number){

const { data: users}  = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number)

    console.log(users)

const { data: posts}  = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number)

    console.log(posts)
}


export {getData}