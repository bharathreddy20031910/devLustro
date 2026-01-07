import React, { useRef } from 'react'

const UseRef = () => {
    const InputFocus = useRef(null)
const AboutSec = useRef(null)   

    const handleFocus =()=>{InputFocus.current.focus()}
    const handleAbout =()=>{AboutSec.current.scrollIntoView({behavior:"smooth"})}
  return (
    <div>
      <h1 ref={InputFocus}>Hi i m Ref</h1>
      <input type="text" placeholder='Type Something...' ref={InputFocus}/><br/>
      <button style={{marginTop:"50px"}} onClick={handleFocus}>Click me for focus</button>
      <h1 ref={AboutSec}>About</h1>
      <h1 style={{marginTop:"1000px"}}>conatct us</h1>
      <button onClick={handleAbout}>Click me to see about </button>
    </div>
  )
}

export default UseRef
