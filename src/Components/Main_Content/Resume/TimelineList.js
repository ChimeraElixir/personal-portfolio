import React from 'react'



const TimelineList = (props) => {
    // console.log(props)
  return (
    
        <li class="timeline-item">

            <h4 class="h4 timeline-item-title">{props.h4}</h4>

            <span>{props.span}</span>

            <p class="timeline-text">
                {props.p}
            </p>

        </li> 
  )
}

export default TimelineList
