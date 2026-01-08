import './App.css'
import Classcom from './Classcompex/Classcom.jsx'
import Reactprops from './Props/Reactprops.jsx'
import UseState from './Hooks/UseState.jsx'
import UseEffect from './Hooks/UseEffect.jsx'
import UseRef from './Hooks/UseRef.jsx'
import { useTheme } from './Context/ContextApi.jsx'
import store from './Redux/Store/Store.jsx'
import { useSelector,useDispatch } from 'react-redux'
import{ increment,decrement,reset } from './Redux/Store/CounterSlice.jsx'


function App(){
  // const name="Bharath"
  // const age=21

  const student={
    name:"Bharath Reddy",
    age:25,
    isGraduated:true
  }
    const student1={
    name:"Bharath Reddy V",
    age:25,
    isGraduated:true
  }
 const student2={
    name:"Shivani",
    age:25,
    isGraduated:false
  }
  const students=[student,student1,student2]
const {theme,toggleTheme}=useTheme()
const count = useSelector((state)=>state.counter.value)
const dispatch = useDispatch()
  return (
   <>
   {/* <h1>Bharath</h1> */}
   {/* <Classcom/> */}
   {/* <Reactprops name={name} age={age}/> */}
   {/* <Reactprops student={student} student1={student1} /> */}
   {/* <Reactprops students={students}/> */}
   {/* <UseState/> */}
   {/* <UseEffect/> */}
   {/* <UseRef/> */}
{/* <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}}>Hello</div>
<button onClick={toggleTheme}>Theme</button> */}

<p>Count:{count}</p>
<button onClick={()=>dispatch(increment())}> Inc</button>
<button onClick={()=>dispatch(decrement())}> Dec</button>
<button onClick={()=>dispatch(reset())}> Reset</button>
   </>
  )
}

export default App;