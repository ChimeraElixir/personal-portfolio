import React from "react"

import AboutText from "./AboutText"
import Service from "./Service"
import Testimonials from "./Testimonials"
// eslint-disable-next-line no-unused-vars
import Clients from "./Clients"
import TestimonialModal from "./TestimonialModal"

import { aboutTextData } from "../../../data"
import { serviceItems } from "../../../data"
import { testimonialsItems } from "../../../data"
// eslint-disable-next-line no-unused-vars
import { clientItems } from "../../../data"
import Skills from "./Skills"

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header className="h2 article-title">About me</header>

      <AboutText aboutTextData={aboutTextData} />
      <Service serviceItems={serviceItems} />
      <Testimonials testimonialsItems={testimonialsItems} />
      <TestimonialModal testimonialsItems={testimonialsItems[0]} />
      {/* <Clients clientItems={clientItems}/> */}
      <Skills />
    </article>
  )
}

export default About
