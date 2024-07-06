import React from 'react'
import TitileWrapper from './TitleWrapper'
import TimelineList from './TimelineList'

const Timeline = (props) => {
  return (
    <section className='timeline'>
        
        <TitileWrapper h={props.heading}/>
        <ol className='timeline-list'>
          {
            props.map((prop)=>{
              return <TimelineList {...prop}/>
            })
          }
          

        </ol>


    </section>
  )
}

export default Timeline
 