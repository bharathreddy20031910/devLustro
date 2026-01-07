import React, { useState } from 'react'

const Reactprops = ({students}) => {
    const [data,setData]= useState(students)
  return (
    <div>
      {/* <h1>Hello {props.name} and my age is {props.age}</h1> */}
      {/* <h1>Hello {student.name} and my age is {student.age}</h1>
      <h1 style={{color:student.isGraduated?"green":"red"}}>{student.isGraduated?"gradated":"not graduared"}</h1><br/>

    //   <h1>Hello {student1.name} and my age is {student1.age}</h1>
    //   <h1 style={{color:student1.isGraduated?"green":"red"}}>{student1.isGraduated?"gradated":"not graduared"}</h1> */}

      <div>
        {data.map((s,i)=>{
return(
    <div key={i}>
      <h1>{s.name} and my age is {s.age}</h1>
      <h1 style={{color:s.isGraduated?"green":"red"}}>{s.isGraduated?"gradated":"not graduared"}</h1><br/>
    </div>
)
        })}
      </div>
    </div>
  )
}

export default Reactprops
