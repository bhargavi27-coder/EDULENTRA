import React from "react";
import {useState} from "react"
export default function Effects(){
    const[increase, setincrease]=useState(0)
    const setfunction=() => setincrease
    (increase+1) 
    const[decrease, setdecrease]=useState(0)
    const setfunction1=() => setdecrease 
    (decrease-1)
    return(
        <>
        <button onClick={setfunction}>count is {increase}</button>
         <button onClick={setfunction1}>count is {decrease}</button>
        
        </>
    )
}