import React, { useState } from 'react'
import { useTheme } from '../Context/ContextApi'

const Reactprops = ({students}) => {
  const {theme,toggleTheme}=useTheme()
    const [data,setData]= useState(students)
  return (
    <div style={{color:theme==='light'?'black':'white',backgroundColor:theme==='light'?'white':'black'}}>
      <button onClick={toggleTheme}>theme</button>
      {/* <h1>Hello {props.name} and my age is {props.age}</h1> */}
      {/* <h1>Hello {student.name} and my age is {student.age}</h1>
      <h1 style={{color:student.isGraduated?"green":"red"}}>{student.isGraduated?"gradated":"not graduared"}</h1><br/>

    //   <h1>Hello {student1.name} and my age is {student1.age}</h1>
    //   <h1 style={{color:student1.isGraduated?"green":"red"}}>{student1.isGraduated?"gradated":"not graduared"}</h1> */}

      <div>
        {data.map((s,i)=>{
return(
    <div key={i}>
      <h1 style={{backgroundColor:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}}>{s.name} and my age is {s.age}</h1>
      <h1 style={{color:theme==='light'?'black':'white',backgroundColor:theme==='light'?'white':'black'}}>{s.isGraduated?"gradated":"not graduared"}</h1><br/>
    </div>
)
        })}
      </div>
    </div>
  )
}

export default Reactprops
