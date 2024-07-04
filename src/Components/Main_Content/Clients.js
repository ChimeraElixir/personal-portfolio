import React from "react";

const clientItems = [
  {
    src: "../assets/images/logo-1-color.png",
  },
  {
    src: "../assets/images/logo-1-color.png",
  },
  {
    src: "../assets/images/logo-1-color.png",
  },
];

const Clients = () => {
  return (
    <section class='clients'>
      <h3 className='h3 clients-title'>Clients</h3>

      <ul className='clients-list has-scrollbar'>
        {clientItems.map((clientItem) => {
          return (
            <li className='clients-item'>
              <button>
                <img src={clientItem.src} alt='client logo'></img>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Clients;
