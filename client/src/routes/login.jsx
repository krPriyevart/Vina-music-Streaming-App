import React from 'react'
import Vinna from '../assets/Vinna.png'
function Login() {
  return (
    <>
      <div className='w-full h-screen bg-slate-400 flex justify-center items-center'>
        <div className='w-1/2 h-3/4 bg-slate-500 flex '>
          <div className='w-1/2 h-full bg-[#F7F7F5]'>
          <div className='w-full h-auto mt-10 border-2 border-sky-500 '>
            <div className='w-full h-auto border-2 border-sky-500 flex justify-center'>
            <img src={Vinna} className='w-1/3'/>
            </div>
            <div className='w-full h-auto border-2 border-sky-500 flex justify-center text-gray-700'>
            <p className='clear-left'>A music🎧 streaming world!</p>
            </div>
          </div>
          <div className='w-full h-4/5 border-2 border-red-500 '>
          <div className='w-full h-auto border-2 px-5 border-sky-500 flex justify-start text-gray-700'>
            <h1 className='text-5xl'> Login </h1>
            </div>
            <div className='w-full h-auto border-2 px-5 border-sky-500 flex justify-start text-gray-700'>
            
            <input type='text'  />
            </div>
          </div>
          </div>
          <div className="w-1/2 h-full bg-[url('./assets/loginImg2.webp')] bg-clip-border bg-cover"></div>
        </div>
      </div>
    </>
  )
}

export default Login
