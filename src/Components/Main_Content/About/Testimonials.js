import React, { useEffect } from "react";
import avatar_2 from "../../../assets/images/avatar-2.png";

const testimonialsItems = [
  {
    src: avatar_2,
    alt: "Jessica Miller",
    h4: "Jessica Miller",
    p: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    src: avatar_2,
    alt: "Jessica Miller",
    h4: "Jessica Miller",
    p: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    src: avatar_2,
    alt: "Jessica Miller",
    h4: "Jessica Miller",
    p: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    if (!modalContainer || !modalCloseBtn || !overlay || !modalImg || !modalTitle || !modalText) return;

    const testimonialsModalFunc = () => {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    const handleItemClick = (event) => {
      const target = event.currentTarget;
      
        modalImg.src = target.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = target.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = target.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = target.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
      
    };

    testimonialsItems.forEach(item => item.addEventListener("click", handleItemClick));
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);

    return () => {
      testimonialsItems.forEach(item => item.removeEventListener("click", handleItemClick));
      modalCloseBtn.removeEventListener("click", testimonialsModalFunc);
      overlay.removeEventListener("click", testimonialsModalFunc);
    };
  }, []);

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsItems.map((item, index) => (
          <li className="testimonials-item" key={index}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={60}
                  data-testimonials-avatar
                />
              </figure>
              <h4 className="h4 testimonials-item-title" data-testimonials-title>
                {item.h4}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{item.p}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
