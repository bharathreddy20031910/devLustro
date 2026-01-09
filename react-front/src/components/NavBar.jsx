import { Link, useNavigate } from 'react-router-dom'

export default function NavBar(){
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/login')
  }

  return (
    <nav style={{padding:12,borderBottom:'1px solid #ddd'}}>
      <Link to="/students" style={{marginRight:12}}>Students</Link>
      {!token && <Link to="/login" style={{marginRight:12}}>Login</Link>}
      {!token && <Link to="/signup" style={{marginRight:12}}>Signup</Link>}
      {token && <Link to="/dashboard" style={{marginRight:12}}>Dashboard</Link>}
      {token && <button onClick={logout}>Logout</button>}
    </nav>
  )
}
