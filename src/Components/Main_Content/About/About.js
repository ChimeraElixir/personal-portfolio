import React from 'react'

import AboutText from './AboutText';
import Service from './Service';
import Testimonials from './Testimonials';
import Clients from './Clients';

const About = () => {
  return (
      <article className='about active' data-page='about'>
          <header className='h2 article-title'>About me</header>

          <AboutText/>
          <Service/>
          <Testimonials/>
          {/* <TestimonialsModal/> */}
          <Clients/>

      </article>
  )
}

export default About;
