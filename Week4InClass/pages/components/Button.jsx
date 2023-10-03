import React from "react";

export default function Button({setCount, count = 0}){

        const onButtonClick = () => {
        setCount(count+1);
    }
    return(
        <>
        <button onClick={onButtonClick}>Click here</button>
        </>
    )
}