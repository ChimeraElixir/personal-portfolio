import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";


const Resume = () => {
  return (
    <article className='resume' data-page='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>

      <Timeline/>
      <Skills/>
    </article>
  );
};

export default Resume;
