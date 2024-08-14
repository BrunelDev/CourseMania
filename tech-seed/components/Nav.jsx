import React from 'react'

export const Nav = () => {
  return (
    <div className="flex w-full fixed top-0 left-0 items-center justify-between py-6 px-12 backdrop-blur-md z-50">
    <ul className="flex space-x-4 text-[#101828] font-medium">
      <a href=""><li className="text-[#1A906B] font-semibold">Accueil</li></a>
      <a href=""><li>A propos</li></a>
      <a href=""><li>Cours</li></a>
      <a href=""><li>Contact</li></a>
      <a href=""><li>FAQs</li></a>
    </ul>
  </div>
  )
}
