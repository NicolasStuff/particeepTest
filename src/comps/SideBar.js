import React from 'react'
import logo from '../logos/Spirit.png';
import './SideBarStyle.css'

export default function SideBar() {
    return (
        <div className='bodyFlex'>
            <div className='SideBar'>
                <img src={logo} className='logoImg'></img>

                <text className='CategoryTitle'>CATEGORY</text>

                <div className='CategoryComps'>
                    <text className='CategoryContent'>Comedy</text>
                    <text className='CategoryContentSelected'>Animation</text>
                    <text className='CategoryContentSelected'>Thriller</text>
                    <text className='CategoryContent'>Drame</text>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
