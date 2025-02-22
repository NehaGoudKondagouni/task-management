import React from 'react'
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
function Login1(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3003/login',{email,password})
        .then(result =>{
            console.log(result)
            if(result.data==="success"){
                navigate('/deadline')
            }
        })
        .catch(err=> console.log(err))
    }
    return(
            <div className='container' >
                <h2> Login for user</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email" autoComplete="off" name="email" required='True'className="form-control rounded-0" onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter password" name="password" required='True' className="form-control rounded-0" onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                    <p>Don't have an account</p>
                    <Link to="/register1" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Sign Up</Link>
            </div>
    )
}
export default Login1;