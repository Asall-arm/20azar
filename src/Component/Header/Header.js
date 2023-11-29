import React from 'react'
import {AiOutlineBell} from 'react-icons/ai'
import {BsBrightnessHigh} from 'react-icons/bs'


import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='admin-profile'>
            <img src='' alt='Admin Profile' />
            <div>
                <h1>عسل رحیمی</h1>
                <h3>برنامه نویس فرانت اند</h3>
            </div>
        </div>

        <div className='header-left-section'>
            <div className='search-box'>
                <input type='text' placeholder='جست و جو کنید...' />
                <bottun>جست و جو</bottun>
            </div>

            <button className='header-left-icons'> <AiOutlineBell /> </button>
            <button className='header-left-icons'> <BsBrightnessHigh /> </button>
        </div>
    </div>
  )
}
