import React, { useState } from "react";
export default function New(){
    const[state,setstate]=useState(0)
    const increase=() => setstate(state+1)
    return(
        <>
          <button onClick={increase}>count is:{state}</button>
          <button>{count}</button>
        </>

    )
}