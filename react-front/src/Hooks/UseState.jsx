import React, { useState } from 'react'
import { useCounter } from '../Context/ContextApi1'

const UseState = () => {
  const {count,inc,dec}=useCounter()
    // const [count,setCount]=useState(1)
    // const handleclick =()=>{
    //     setCount(count+1)
    // }
  return (
    <div>
      {/* <h1>Count:{count}</h1>
      <button onClick={handleclick}>Inc</button>
       <button onClick={()=>setCount(count-1)}>Dec</button> */}
      <h1>Count:{count}</h1>
      <button onClick={inc}>Inc</button>
       <button onClick={dec}>Dec</button>
    </div>
  )
}

export default UseState
