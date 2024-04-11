import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Login'
import App1 from './App1'; 
import EmployeeTaskAssign from './EmployeeTaskAssign'
import Demo from './Demo'
import Demo1 from './Demo1'
import Signup1 from './Signup1'
import Login1 from './Login1'
import Deadline from './Deadline'
import Assign from './Assign'
import ProjectStatus from './ProjectStatus'
import ContactUs from './ContactUs'
import Home from './Home'
import Navbar from './Navbar'
import Neha from './Neha'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/app1' element={<App1/>}></Route>
        <Route path='/employee' element={<EmployeeTaskAssign/>}></Route>
        <Route path='/demo' element={<Demo/>}></Route>
        <Route path='/demo1' element={<Demo1/>}></Route>
        <Route path='/register1' element={<Signup1/>}></Route>
        <Route path='/login1' element={<Login1/>}></Route>
        <Route path='/deadline' element={<Deadline/>}></Route>
        <Route path='/assign' element={<Assign/>}></Route>
        <Route path='/status' element={<ProjectStatus/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/neha' element={<Neha/>}></Route>





      </Routes>
    </BrowserRouter>
  )
}

export default App;
