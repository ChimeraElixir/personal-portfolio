import React from "react";
import IonIcon from "@reacticons/ionicons";

import { contactItems } from "../../data";

const ContactList = () => {
  return (
    <ul className='contacts-list'>
      {contactItems.map((contactItem, index) => {
        return (
          <li key={index} className='contact-item'>
            <div className='icon-box'>
              <IonIcon name={contactItem.logo}></IonIcon>
            </div>
            <div className='contact-info'>
              <p className='contact-title'>{contactItem.p}</p>
              <a href={contactItem.href} className='contact-link'>
                {contactItem.value}
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
