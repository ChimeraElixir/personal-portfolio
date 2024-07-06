import React from "react";

import Timeline from'./Timeline'


const timelineItems1=[
    {
        h4:"University school of the arts",
        span:"2007-2008",
        p:"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
        h4:"University school of the arts",
        span:"2007-2008",
        p:"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
        h4:"University school of the arts",
        span:"2007-2008",
        p:"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },

]
const timelineItems2=[
    {
        h4:"University school of the arts",
        span:"2007-2008",
        p:"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
        h4:"University school of the arts",
        span:"2007-2008",
        p:"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
        h4:"University school of the arts",
        span:"2007-2008",
        p:"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },

]


const Resume = () => {
  return (
    <article className='resume active' data-page='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <Timeline heading='Education' {...timelineItems1}/>
      <Timeline heading='Education' {...timelineItems2}/>
      {/* <Skills/> */}

    </article>
  );
};

export default Resume;
