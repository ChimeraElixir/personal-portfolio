import React from 'react'

import SidebarInfo from './SidebarInfo'
import SidebarInfoMore from './SidebarMoreInfo'

const Sidebar = () => {
  return (
    <aside className='sidebar' data-sidebar>
      <SidebarInfo/>
      <SidebarInfoMore/>
    </aside>
  )
}

export default Sidebar
