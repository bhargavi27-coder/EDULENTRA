import React from "react"
import { useState, useEffect } from "react" 

export default function Effect() { 

const [users, setUsers] = useState([]) 
const [load, setLoad] = useState(true) 
const [error, setError] = useState(null) 
useEffect(() => { 
fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => res.json()) 
.then(data => {setUsers(data) ,setLoad(false)})
 .catch(() => setError("Failed to load data")) 
}, []) 
if (error) return <h2>{error}</h2> 
if (load){ return (<h2>Loading...</h2> )}

return ( 
<div> 
{users.map(user => ( 
<h3 key={user.id}>{user.name}</h3> 
))} 
</div> 
) 
} 
