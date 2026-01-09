import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Students from './pages/Students.jsx'
import StudentForm from './pages/StudentForm.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NavBar from './components/NavBar.jsx'

function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/students" replace />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/students/new" element={<StudentForm/>} />
        <Route path="/students/:id/edit" element={<StudentForm/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;