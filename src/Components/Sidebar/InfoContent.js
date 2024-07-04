import React from 'react'

const InfoContent = (props) => {
  return (
    <div className='info-content'>
       <h1 className='name' title={props.name}>{props.name}</h1>
    </div>
  )
}

export default InfoContent
