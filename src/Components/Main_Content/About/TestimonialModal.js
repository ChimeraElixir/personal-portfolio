import React from 'react'
import avatar_2 from "../../../assets/images/avatar-2.png";
import quote from "../../../assets/images/icon-quote.svg";
import IonIcon from '@reacticons/ionicons';

const TestimonialModal = ({testimonialsItems}) => {
  return (
    <div className="modal-container" data-modal-container>

          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">

            <button className="modal-close-btn" data-modal-close-btn>
              <IonIcon name="close-outline"></IonIcon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={avatar_2} alt={testimonialsItems?.name} width="80" data-modal-img/>
              </figure>

              <img src={quote} alt="quote icon"/>
            </div>

            <div className="modal-content">

              <h4 className="h3 modal-title" data-modal-title>{testimonialsItems?.name || "Gaurav"}</h4>

              <time>{testimonialsItems?.date}</time>

              <div data-modal-text>
                <p>
                  {testimonialsItems?.p}
                </p>
              </div>

            </div>

          </section>

        </div>
  )
}

export default TestimonialModal
