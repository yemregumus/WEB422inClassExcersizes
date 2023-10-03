import React, {useState, useEffect} from "react";

export default function Data(){
    //states
    const [id, setId] = useState(0);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        console.log("Data:")
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log({data});
            setId(data?.userId)
            setUserData(data)
            console.log(data)
        
        }).catch(err => console.log(err))
    }, [])



    return(
        <>
        <h1> Fetch data from server</h1>
        {userData
            ?<>
                <p>User id is {id}</p>
                <p>Title is : {userData.title}</p>
                </>
            : <p>No data</p>

        }
        <p>User id is {id}</p>
        <p>Title is : {userData.title}</p>
        </>
    )
}