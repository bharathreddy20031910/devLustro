import React from 'react'

class Timer extends React.Component{
    state ={count:0}

    componentDidMount(){
        console.log("componnet Mounted")
        this.timer = setInterval(()=>{
            this.setState({count:this.state.count+2})
        },1000)
    }
    componentDidUpdate(){
        console.log("Updated")
    }
    componentWillUnmount(){
    console.log("componnet Unmounted")
        clearInterval(this.timer)
    }
    render(){
        return (
            <h1>Timer:{this.state.count}</h1>
        )
    }
}

export default Timer
