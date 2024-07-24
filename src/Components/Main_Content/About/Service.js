import React from "react";


const Service = ({serviceItems}) => {
  return (
    <section className='service'>
      <h3 className='h3 service-title'>What i'am doing</h3>

      <ul className='service-list'>
        {serviceItems.map((serviceItem,index) => {
          return (
            <li key={index} className='service-item'>
              <div className='service-icon-box'>
                <img
                  src={serviceItem.src}
                  alt={serviceItem.alt}
                  width={40}
                ></img>
              </div>
              <div className='service-content-box'>
                <h4 className='h4 service-item-text'>{serviceItem.h4}</h4>
                <p className='service-item-text'>{serviceItem.p}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Service;
