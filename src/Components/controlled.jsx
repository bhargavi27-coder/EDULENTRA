import React from "react";
import { useState } from "react";
export default function Controlled(){
    const[name, setname]=useState("")
    return(
        <>
        <form action="">
            <label>NAME</label>
            <input type="text" name="name" value={name}
            onChange={(e)=>setname(e.target.value)}></input>
            <label htmlFor="">EMail</label>
            <input type="email" name="email" />
            <input type="submit"></input>

        </form>
        <h1>name is :{name}</h1>
        {/* <h2>Email is :{email}</h2> */}
        </>
    )

}