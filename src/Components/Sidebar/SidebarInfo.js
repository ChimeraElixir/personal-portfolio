import React from 'react'

import Figure from './Figure'
import InfoContent from './InfoContent'
import InfoMoreBtn from './InfoMoreBtn'

import my_avatar from '../../assets/images/my-avatar.png'



const SidebarInfo = () => {
  return (
    <div className='sidebar-info' data-sidebar>

      <Figure img = {my_avatar}/>
      <InfoContent name='Gaurav Verma'/>
      <InfoMoreBtn/>
      
    </div>
  )
}

export default SidebarInfo