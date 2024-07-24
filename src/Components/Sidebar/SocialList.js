import React from "react";
import IonIcon from "@reacticons/ionicons"

import { socialLists } from "../../data";
const logos = [
  {
    name: "logo-facebook",
  },
  {
    name: "logo-twitter",
  },
  {
    name:"logo-instagram"
  },
];

const SocialList = () => {
  return (
    <ul className='social-list'>
      {socialLists.map((socialList,index) => {
        return (
          <li key={index} className='social-item'>
            <a href={socialList.link} className='social-link'>
              <IonIcon name={socialList.logo}></IonIcon>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
