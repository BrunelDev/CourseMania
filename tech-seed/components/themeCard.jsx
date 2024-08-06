"use client"
import {useState} from 'react'


export default function ThemeCard({title, icon, description}) {
    const [selected, setSelected] = useState(true)
  return (
    <div className={`${selected? "bg-[#4AC8AE] text-white" : "bg[#FFFFFF]"} rounded-lg p-8 w-fit`}>
        <div className="flex w-fit items-center text-xl font-bold">
        <img src={icon} alt="" className='w-10 h-10'/>
        {title}
        </div>
        <p className='w-[250px] text-[0.8em]'>
            {description}
        </p>
        <span className='flex'>
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            <img src="arrowRight.png" alt="" className='text-white'/>
        </span>
      
    </div>
  )
}
