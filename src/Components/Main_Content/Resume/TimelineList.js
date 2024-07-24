import React from 'react'



const TimelineList = (props) => {
  return (
    
        <li className="timeline-item">

            <h4 className="h4 timeline-item-title">{props.h4}</h4>

            <span>{props.span}</span>

            <p className="timeline-text">
                {props.p}
            </p>

        </li> 
  )
}

export default TimelineList
