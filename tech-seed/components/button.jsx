"use client"
import React from 'react'

export default function Button({title, bgColor, action}) {
    console.log(title)
  return (
    <span className='bg-[#20B486] text-white py-2 px-3 text-center rounded-md'>
        {title}
      
    </span>
  )
}
