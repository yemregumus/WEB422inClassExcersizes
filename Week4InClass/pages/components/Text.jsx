import React from "react";

export default function Text({count = 0}){
    
    return (
        <p>
            {
                count > 10
                ? "Counter is more than 10"
                : "Counter is less than 10"
            }
        </p>
    )
}