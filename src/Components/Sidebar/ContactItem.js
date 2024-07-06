import React from "react";
import IonIcon from "@reacticons/ionicons"

const ContactItem = (props) => {
  return (
    <li className='contact-item'>
      <div class='icon-box'>
        <IonIcon name={props.name}></IonIcon>
      </div>

      <div class='contact-info'>
        <p class='contact-title'>{props.p}</p>

        <a href={props.href} class='contact-link'>
          {props.value}
        </a>
      </div>
    </li>
  );
};

export default ContactItem;
