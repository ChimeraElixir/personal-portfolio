import React from "react";
import TimelineList from "./TimelineList";
import "../useHandleClick";
import { timelineItems } from "../../../data";

import IonIcon from "@reacticons/ionicons";

const Timeline = () => {
  return (
    <>
      {timelineItems.map((timelineItem, index) => {
        return (
          <section key={index} className='timeline'>
            <div className='title-wrapper'>
              <div className='icon-box'>
                <IonIcon name={timelineItem.icon}></IonIcon>
              </div>
              <h3 className='h3'>{timelineItem.heading}</h3>
            </div>
            <ol className='timeline-list'>
              {timelineItem.items.map((item, index) => (
                <TimelineList key={index} {...item} />
              ))}
            </ol>
          </section>
        );
      })}
    </>
  );
};

export default Timeline;
