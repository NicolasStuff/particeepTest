import React from 'react'
import './HeaderStyle.css'
import headerImg from '../img/ocean-8-critique.jpeg'

export default function Header () {
    return (
        <div>
            <img src={headerImg} className='imageHeader'></img>
        </div>
    )
}
