import React from 'react'
import { Icon } from '@iconify/react';
function sidebarMenu({iconName, displayText}) {
  return (
    <div className='w-full h-10 flex justify-start px-8 my-2 border-2 border-blue-400 '>
       <Icon icon={iconName} className='size-8' color='white' />
       <p className='text-white text-2xl mx-4'>{displayText}</p>
    </div>
  )
}

export default sidebarMenu
