import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(1)
    const handleclick =()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleclick}>Inc</button>
       <button onClick={()=>setCount(count-1)}>Dec</button>
    </div>
  )
}

export default UseState
