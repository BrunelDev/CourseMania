import React from 'react'
import Navbar from "../components/navbar"
import ThemeCard from "../components/themeCard"
export default function Home() {
  return (
    <main>
      <div className='mb-10'>
        <Navbar/>
      </div>
      <div>
      <ThemeCard title={'Interaction Design'}
      icon='interactionDesign.png'
      description={"loremipsumdolor loremipsumdolor loremipsumdolorloremipsumdolor"}/>

      </div>

    </main>
  )
}
