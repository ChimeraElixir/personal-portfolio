import React, { useEffect } from "react";
import IonIcon from "@reacticons/ionicons";

import Figure from "./Figure";
import InfoContent from "./InfoContent";
import InfoMoreBtn from './InfoMoreBtn'


import my_avatar from "../../assets/images/my-avatar.png";


const SidebarInfo = () => {
  useEffect(() => {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    const handleSidebarToggle = () => {
      sidebar.classList.toggle("active");
    };

    // Ensure the elements exist before adding the event listener
    
      sidebarBtn.addEventListener("click", handleSidebarToggle);
    

    // Cleanup the event listener on component unmount
    return () => {
      if (sidebarBtn) {
        sidebarBtn.removeEventListener("click", handleSidebarToggle);
      }
    };
  }, []);

  return (
    <div className='sidebar-info' data-sidebar>
      <Figure img={my_avatar} />
      <InfoContent name='Gaurav Verma' />
      <InfoMoreBtn/>
    </div>
  );
};

export default SidebarInfo;
