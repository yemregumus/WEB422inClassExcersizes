// Importing necessary modules and functions from React
import React, { useState, useEffect } from "react";

// Defining a functional component called "Users"
export default function Users() {
  // Using the useState hook to create a state variable called "userData" initialized as an empty array
    const [userData, setUserData] = useState([]);

  // Using the useEffect hook to perform side effects in the component
    useEffect(() => {
    // Logging a message to the console
    console.log("Data:");

    // Fetching data from an external API using the fetch function
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Parsing the response as JSON
        .then(data => {
        // Updating the "userData" state with the fetched data
        setUserData(data);
        // Logging the fetched data to the console
        console.log(data);
        })
        .catch(err => console.log(err)); // Handling any errors that occur during the fetch
    }, []); // The empty dependency array means this effect runs once when the component mounts

  // Rendering the component's JSX content                                   
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
            {/* Mapping over the "userData" array and rendering a table row for each item */}
            {userData?.map((user) => (
                <tr key={user.id}> {/* Using "user.id" as the key for each row */}
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
