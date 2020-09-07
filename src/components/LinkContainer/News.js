import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
    return (
        <div className="news">
        <h1>News</h1>
        <p>Hopefully my Danceteacher carrier develops into a software enginer career.</p> 
        <p><strong> I love programming!!! </strong></p>
        <Link to='/' className="supportLinkBack"><strong>BACK</strong></Link>
    </div>
    )
}
