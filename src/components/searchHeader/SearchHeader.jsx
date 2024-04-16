import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`)
  }

  useEffect(() => {
    setText(keyword || '')
  }, [keyword])

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center '>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bolad bl-2 text-3xl'>YouTube</h1>
      </Link>

      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <label htmlFor=""></label>
        <input 
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type="text" 
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type='submit' className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  )
}
