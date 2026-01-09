import { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState(null)
  const navigate = useNavigate()

  async function submit(e){
    e.preventDefault()
    try{
      const res = await api.post('/signup',{name,email,password})
      setMessage('Signup successful. Please login.')
      setTimeout(()=>navigate('/login'),1000)
    }catch(err){
      setMessage(err.message)
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Signup</h2>
      <form onSubmit={submit}>
        <div>
          <label>Name</label><br/>
          <input value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label><br/>
          <input value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label><br/>
          <input value={password} type="password" onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
