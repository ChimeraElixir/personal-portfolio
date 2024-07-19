import React from "react";
import TitleWrapper from "./TitleWrapper";
import TimelineList from "./TimelineList";
import '../useHandleClick'

const Timeline = ({heading,items}) => {
  return (
    <section className='timeline'>
      <TitleWrapper h={heading} />
      <ol className='timeline-list'>
      {
        items.map((item, index) => (
          <TimelineList key={index} {...item} />
        ))}
        </ol>
    </section>
  );
};

export default Timeline;
