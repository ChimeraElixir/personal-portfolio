import React from "react";

const logos = [
  {
    name: "logo-facebook",
  },
  {
    name: "logo-twitter",
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
    <ul className='social-lsit'>
      {logos.map((logo) => {
        return (
          <li className='social-item'>
            <a href='#' className='social-link'>
              <ion-icon className={logo.name}></ion-icon>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social_list;
