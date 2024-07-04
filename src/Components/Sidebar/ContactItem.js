import React from "react";

const ContactItem = (props) => {
  return (
    <li className='contact-item'>
      <div class='icon-box'>
        <ion-icon name={props.name}></ion-icon>
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
