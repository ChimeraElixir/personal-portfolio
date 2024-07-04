import React from 'react'
import TitileWrapper from './TitleWrapper'
import TimelineList from './TimelineList'

const Timeline = (props) => {
  return (
    <section className='timeline'>
        
        <TitileWrapper h={props.heading}/>
        <TimelineList {...props}/> 


    </section>
  )
}

export default Timeline
 