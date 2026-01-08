import { createContext, useContext, useState } from "react";

const Counter = createContext()
export const CounterProvider = ({children})=>{
const [count,setCount]=useState(0)
const inc=()=>{
    setCount(count+1)
}
const dec =()=>{
    setCount(count-1)
}
    return(
        <Counter.Provider value={{count,inc,dec}}>
            {children}
        </Counter.Provider>
    )
}
export const useCounter=()=>useContext(Counter)