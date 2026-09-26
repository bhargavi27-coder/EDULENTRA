import React from "react";
export default function Iterative(){
    const obj={
        name:"bhargavi",
        course:"a"
    }
    const arr=["bharu","sindhu","saniya","kavya"]
    const obj2=[
        {id:1,name:"bharu",course:"a"},
        {id:2,name:"sindhu",course:"b"},
        {id:3,name:"dany",course:"c"}
    ]
    return(
        <>
        {obj2.map((data)=>(
            <h1 key={data.id}>{data.id}-{data.name}-{data.course}</h1>
        ))}
        {arr.map((names,index) => (
            <h1 key={index}>{index}.{names}</h1>
        ))}
         <h1>{arr}</h1>

        <h1>{obj.course}</h1>
        </>
    )
}