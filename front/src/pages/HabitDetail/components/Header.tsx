import React from 'react'
import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link to='/home'>
        <AiOutlineArrowLeft className='text-primary-dark w-5 h-5' />
      </Link>
      <h1>Habit Detail</h1>
      <Link to='/home'>
        <AiOutlineEdit className='text-primary-dark w-5 h-5' />
      </Link>
    </header>
  )
}

export default Header