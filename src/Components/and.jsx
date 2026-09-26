import React from "react";
function Condition2({isStudent,roll}){
    let msg=""
    if(roll=="admin"){
        msg="open admin page"
    }
    else if(roll=="student"){
        msg="open student page"
    }
    else if(roll=="faculty"){
        msg="open faculty page"

    }
    else{
        msg="nothing"
    }
    return(
        <>
        <h1>{msg}</h1>
        <h1>{isStudent ? "he is student" : "he is not a student"}</h1>
        <h2>{isStudent ? <h1>"is student"</h1> : <h1>"not a student"</h1>}</h2>
        </>
    )
}
export default Condition2