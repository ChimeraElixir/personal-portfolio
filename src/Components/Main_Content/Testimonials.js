import React from "react";

const testimonialsItems = [
  {
    src: "./assets/images/avatar-2.png",
    alt: "Jessica miller",
    h4: "Jessica miller",
    p: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has alot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    src: "./assets/images/avatar-2.png",
    alt: "Jessica miller",
    h4: "Jessica miller",
    p: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has alot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    src: "./assets/images/avatar-2.png",
    alt: "Jessica miller",
    h4: "Jessica miller",
    p: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has alot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <h3 className='h3 testimonials-title'>Testimonials</h3>

      <ul className='testimonials-list has scrollbar'>
        {testimonialsItems.map((testimonialsItem) => {
          return (
            <div className='content-card' data-testimonials-item>
              <figure className='testimonial-avtar-box'>
                <img
                  src={testimonialsItem.src}
                  alt={testimonialsItem.alt}
                  width='60'
                  data-testimonials-avatar
                ></img>
              </figure>
              <h4
                className='h4 testimonials-item-title'
                data-testimonials-title
              >
                {testimonialsItem.h4}
              </h4>
              <div class='testimonials-text' data-testimonials-text>
                <p>{testimonialsItem.p}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
