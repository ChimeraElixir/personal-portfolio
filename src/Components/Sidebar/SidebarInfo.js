import React, { useEffect } from "react"

import Figure from "./Figure"
import InfoContent from "./InfoContent"
import InfoMoreBtn from "./InfoMoreBtn"

import { myInfo } from "../../data"

const SidebarInfo = () => {
  useEffect(() => {
    const sidebar = document.querySelector("[data-sidebar]")
    const sidebarBtn = document.querySelector("[data-sidebar-btn]")

    const handleSidebarToggle = () => {
      sidebar.classList.toggle("active")
    }

    if (sidebarBtn) {
      sidebarBtn.addEventListener("click", handleSidebarToggle)
    }

    return () => {
      if (sidebarBtn) {
        sidebarBtn.removeEventListener("click", handleSidebarToggle)
      }
    }
  }, [])

  return (
    <div className="sidebar-info">
      <Figure img={myInfo.my_avatar} />
      <InfoContent {...myInfo} />
      <InfoMoreBtn />
    </div>
  )
}

export default SidebarInfo
