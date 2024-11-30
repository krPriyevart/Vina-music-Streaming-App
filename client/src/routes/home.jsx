import React from 'react'
import { Icon } from '@iconify/react';
import Vinna1 from '../assets/Vinna1.png'
import Logo from '../assets/logo.png'
import SidebarMenu from '../components/sidebarMenu.jsx'

function Home() {
  return (
    <div className="w-full h-screen bg-[url('./assets/bg2.webp')]">
       <div className="w-full h-screen bg-[rgba(0,0,0,0.7)] flex">
        <div className='w-1/5 h-screen border-2 border-red-600 flex flex-col'>
          <img src={Vinna1} className='w-1/2 py-3 px-4'/>
            <SidebarMenu iconName={"mynaui:home-solid"} displayText={"Home"} />
            <SidebarMenu iconName={"carbon:recently-viewed"} displayText={"Recent"} />
            <SidebarMenu iconName={"iconamoon:music-album-light"} displayText={"Album"} />
            <SidebarMenu iconName={"zondicons:artist"} displayText={"Artist"} />
            <div className='w-full  border-2 border-yellow-500 overflow-auto flex-1 no-scrollbar'>
            <div className='w-full h-10 text-white text-2xl mx-4 my-4'>Your Playlist</div>
              <div className='w-full  border-2 border-red-300 px-10 '>
              <div className='w-fit h-fit flex align-middle text-white text-xl px-6 rounded-full py-1 border-2 border-white box-border'>
                 <Icon icon="tabler:playlist-add" width="34" height="36" />
                 <p className='pt-[4px]'>New Playlist</p>
                 </div>
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              <SidebarMenu iconName={"qlementine-icons:playlist-16"} displayText={"Playlist 1"} />
              
              </div>
            </div>
        </div>
        <div className='w-4/5 h-screen border-2 border-red-600 flex flex-col'>
        <div className='w-full h-14 border-2 border-red-600 flex justify-end items-center'>
          <div className='w-4/12 h-4/5 border-2 border-white flex rounded-full justify-end items-center'>
          <input type='text' className='w-10/12 bg-transparent border-none focus:outline-none text-white px-6 font-sans'/>
          <Icon icon="mingcute:search-line" className="w-2/12 cursor-pointer" width="24" height="24" color='white'/>
          </div>
          <div className='w-3/12 h-4/5 border-2 border-yellow-400 flex justify-end'>
          <div className=' h-full border-2 border-white px-6 mx-2 rounded-full text-white flex justify-center items-center'><p>Sign In</p></div>
          <div className=' h-full border-2 border-white px-6 mx-2 rounded-full text-white flex justify-center items-center'><p>Sign Up</p></div>
          </div>
          <div className='w-1/12 h-4/5 border-2 border-yellow-400 flex justify-center'>
          <div className='w-10 h-10 border-2 border-white-400 rounded-full'>
          <img src={Logo} className='rounded-full' />
          </div>
          </div>

        </div>
        <div className='w-full border-2 border-red-600 overflow-auto flex-1 no-scrollbar'>

          <div className='w-full h-[1000px] border-2 border-green-600 '></div>


        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
