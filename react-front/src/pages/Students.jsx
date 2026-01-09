import { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

export default function Students(){
  const [students,setStudents]=useState([])
  const [loading,setLoading]=useState(true)

  async function load(){
    setLoading(true)
    const res = await api.get('/students')
    setStudents(res.data || [])
    setLoading(false)
  }

  useEffect(()=>{load()},[])

  async function remove(id){
    if(!confirm('Delete student?')) return
    await api.delete(`/students/${id}`)
    load()
  }

  return (
    <div style={{padding:20}}>
      <h2>Students</h2>
      <Link to="/students/new">Create New</Link>
      {loading ? <p>Loading...</p> : (
        <table style={{width:'100%',marginTop:12,borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th style={{border:'1px solid #ddd',padding:8}}>Name</th>
              <th style={{border:'1px solid #ddd',padding:8}}>Email</th>
              <th style={{border:'1px solid #ddd',padding:8}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s=> (
              <tr key={s._id}>
                <td style={{border:'1px solid #ddd',padding:8}}>{s.name}</td>
                <td style={{border:'1px solid #ddd',padding:8}}>{s.email}</td>
                <td style={{border:'1px solid #ddd',padding:8}}>
                  <Link to={`/students/${s._id}/edit`} style={{marginRight:8}}>Edit</Link>
                  <button onClick={()=>remove(s._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
