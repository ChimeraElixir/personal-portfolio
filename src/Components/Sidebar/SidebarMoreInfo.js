import React from 'react'
import ContactList from './ContactList'
import SocialList from  "./SocialList"



const SidebarMoreInfo = () => {
  return (
    <div class="sidebar-info_more">
      <div className='seperator'></div>
      <ContactList/>
      <div className='seperator'></div>
      <SocialList/>
    </div>
  )
}

export default SidebarMoreInfo
