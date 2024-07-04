import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'

const Main_content = () => {
  return (
    <div className='main-content'>
      <Navbar/>
      <About/>
      {/* <Resume/> */}
      {/* <Portfolio/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Main_content
