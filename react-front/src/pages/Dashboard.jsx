import { useEffect, useState } from 'react'
import { getProfile } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')

  useEffect(()=>{
    if(!userId){
      navigate('/login')
      return
    }

    getProfile(userId)
      .then(res => setProfile(res.data))
      .catch(err => {
        console.error(err)
      })
  }, [userId])

  if(!userId) return null
  if(!profile) return <div style={{padding:12}}>Loading profile...</div>

  return (
    <div style={{padding:12}}>
      <h2>Dashboard</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  )
}
