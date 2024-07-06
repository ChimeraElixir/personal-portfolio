import React from "react";
import IonIcon from "@reacticons/ionicons"

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

const Social_list = () => {
  return (
    <ul className='social-list'>
      {logos.map((logo) => {
        return (
          <li className='social-item'>
            <a href="google.com" className='social-link'>
              <IonIcon name={logo.name}></IonIcon>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social_list;
