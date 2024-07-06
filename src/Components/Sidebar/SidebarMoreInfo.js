import React from 'react'
import ContactList from './ContactList'
import SocialList from  "./SocialList"



const SidebarMoreInfo = () => {
  return (
    <div class="sidebar-info_more">
      <div className="separator"></div>
      <ContactList />
      <div className="separator"></div>
      <SocialList />
    </div>
  )
}

export default SidebarMoreInfo
