import React from 'react'

import AboutText from './AboutText';
import Service from './Service';
import Testimonials from './Testimonials';
import Clients from './Clients';
import TestimonialModal from './TestimonialModal';

const About = () => {
  return (
      <article className='about active' data-page='about'>
          <header className='h2 article-title'>About me</header>

          <AboutText/>
          <Service/>
          <Testimonials/>
          <TestimonialModal/>
          <Clients/>

      </article>
  )
}

export default About;
