import React from "react";
export default function Condition({isStudent,name}){
    if(isStudent){
        return(
            <>
            <h1>{name} is student</h1>
            <h2>{`${name} is a student`}</h2>
            </>
        )
    }
    else{
    return(
        <>
        <h1>{name} is not a student</h1>
        </>
    )
}
}