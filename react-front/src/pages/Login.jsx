import { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(null)
  const navigate = useNavigate()

  async function submit(e){
    e.preventDefault()
    try{
      const res = await api.post('/login',{email,password})
      if(res.data && res.data.token){
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('userId',res.data.userId)
        console.log(res.data.token);
        navigate('/dashboard')
      } else {
        setError(res.data)
      }
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          <label>Email</label><br/>
          <input value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label><br/>
          <input value={password} type="password" onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color:'red'}}>{String(error)}</p>}
    </div>
  )
}
