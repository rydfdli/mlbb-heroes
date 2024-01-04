import React from 'react'
import error from '../assets/error.png'

export default function Blank() {

  return (
    <div className='flex flex-col items-center h-full justify-center'>
      <img src={error} alt="error" className='w-1/4' loading="lazy" />
      <h1 className='text-6xl font-jakarta font-bold'>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}
