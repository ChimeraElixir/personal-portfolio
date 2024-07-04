import React from 'react'
import Titile_Wrapper from './Title_Wrapper'
import Timeline_List from './Timeline_List'

const Timeline = (props) => {
  return (
    <section className='timeline'>
        
        <Titile_Wrapper h={props.heading}/>
        <Timeline_List {...props}/> 


    </section>
  )
}

export default Timeline
 