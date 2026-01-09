import { useState, useEffect } from 'react'
import api from '../api'
import { useNavigate, useParams } from 'react-router-dom'

export default function StudentForm(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(()=>{
    if(id){
      setLoading(true)
      api.get(`/students/${id}`).then(res=>{
        const s = res.data
        setName(s.name||'')
        setEmail(s.email||'')
        setPassword(s.password||'')
        setLoading(false)
      }).catch(()=>setLoading(false))
    }
  },[id])

  async function submit(e){
    e.preventDefault()
    try{
      if(id){
        await api.put(`/students/${id}`,{name,email,password})
      } else {
        await api.post('/students',{name,email,password})
      }
      navigate('/students')
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>{id? 'Edit Student' : 'Create Student'}</h2>
      {loading ? <p>Loading...</p> : (
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
          <input value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
      )}
    </div>
  )
}
