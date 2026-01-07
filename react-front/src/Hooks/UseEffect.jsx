import React, { useState,useEffect } from 'react'

const UseEffect = () => {
const [users,setUsers]=useState([])

useEffect(()=>{
   setTimeout(()=>{
    fetchUsers()
   },2000)
},[])
console.log(users)

const fetchUsers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
    .catch((err)=>console.log(err))
}

  return (
    <div>
      <h1>Use Effect example</h1>
{users.map((user)=>{
    return(
        <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.website}</h3>
            <hr/>
        </div>
    )
})}
    </div>
  )
}

export default UseEffect
