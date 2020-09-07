import React from 'react'
import { Link } from 'react-router-dom'



export default function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <p>This website is about my favourite videos </p>
            <Link to='/'className="supportLinkBack"><strong>BACK</strong></Link>
        </div>
    )
}
