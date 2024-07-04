import React from 'react'

const Figure = (props) => {
  return (
    <figure className='avatar-box'>
        <img src={props.img} alt='Gaurav Verma' width={80}/>
    </figure>
  )
}

export default Figure
