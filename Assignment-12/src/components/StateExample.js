import React, { useState } from "react";

export const StateExample =() =>{
    const [data,setData] = useState('Hello There');
    const updateHandler = ()=>{
        setData ='Welcome bro';
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updateHandler}>Update</button>
        </div>
    )
}