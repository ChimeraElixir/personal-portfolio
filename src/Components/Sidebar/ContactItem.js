import React from "react";
import IonIcon from "@reacticons/ionicons"

const ContactItem = (props) => {
  return (
    <li className='contact-item'>
      <div className='icon-box'>
        <IonIcon name={props.name}></IonIcon>
      </div>

      <div className='contact-info'>
        <p className='contact-title'>{props.p}</p>

        <a href={props.href} className='contact-link'>
          {props.value}
        </a>
      </div>
    </li>
  );
};

export default ContactItem;
