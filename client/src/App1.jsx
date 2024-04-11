import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App1.css'

function App1() {
  const [employees,setEmployees]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/status')
    .then(response=>{
      setEmployees(response.data)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
        <p>Project Status</p>
      <table className='table'>
        <thead>
          <tr>
            <th>
              projectName
            </th>
            <th>
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(user=>{
              return <tr key={user._id}>
                <td>{user.projectName}</td>
                <td>{user.status}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default App1
