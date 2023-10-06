import React, { useState, useEffect } from "react";

export default function Users() {
  const [userData, setUserData] = useState([]); // Initialize as an empty array

    useEffect(() => {
        console.log("Data:");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
            setUserData(data); // Update the state with the fetched data
            console.log(data); // Log the data
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>UserID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {userData?.map((user) => (
                <tr key={user.id}> 
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
