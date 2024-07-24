import React from 'react'
import {Navbar} from './Navbar'
import {About}  from './About'
import {Resume} from './Resume'
import { Portfolio } from './Portfolio'
import {Contact} from './Contact'


const MainContent = () => {
  return (
    <div className='main-content'>
      <Navbar/>
      <About/>
      <Resume/>
      {/* <Portfolio/> */}
      <Contact/>
    </div>
  )
}

export default MainContent;
