import React from "react";

const serviceItems = [
  {
    src: "./assets/images/icon-design.svg",
    alt: "design icon",
    h4: "Web design",
    p: "The most modern and high-quality design made at a professional level.",
  },
  {
    src: "./assets/images/icon-dev.svg",
    alt: "Web development icon",
    h4: "Web development",
    p: "High-quality development of sites at the professional level",
  }
];

const Service = () => {
  return (
    <section className='service'>
      <h3 className='h3 service-title'>What i'am doing</h3>

      <ul className='service-list'>
        {serviceItems.map((serviceItem) => {
          return (
            <li className='service-item'>
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
