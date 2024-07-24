import React from "react";


const Clients = ({clientItems}) => {
  return (
    <section className='clients'>
      <h3 className='h3 clients-title'>Clients</h3>

      <ul className='clients-list has-scrollbar'>
        {clientItems.map((clientItem,index) => {
          return (
            <li className='clients-item' key={index}>
              <a href="google.com">
                <img src={clientItem.src} alt='client logo'></img>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Clients;
