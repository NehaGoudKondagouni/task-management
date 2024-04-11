import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Demo1.css'
function Demo1() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/register">Manager</Link>
                    </li>
                    <li>
                        <Link to="/register1">User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Demo1


