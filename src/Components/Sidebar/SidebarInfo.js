import React from 'react'

import Figure from './Figure'
import InfoContent from './InfoContent'
import InfoMoreBtn from './InfoMoreBtn'

const SidebarInfo = () => {
  return (
    <div className='sidebar-info' data-sidebar>

      <Figure/>
      <InfoContent/>
      <InfoMoreBtn/>
      
    </div>
  )
}

export default SidebarInfo