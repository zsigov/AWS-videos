import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
    return (
        <div className="support">
            <h1>Support</h1>
            <p>If you have any problem dont hesitate to contact us:</p>
            <ul>
                <li>Email: <span>awsvideos@awsvideos.com</span></li>
                <li>Tel: <span>+00 1234567</span></li>
                <li>Address: <span>SE3 5GE London AWS street 34.</span></li>
            </ul>
            <Link to='/' className="supportLinkBack"><strong>BACK</strong></Link>
        </div>
    )
}
