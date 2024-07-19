import React from 'react'

const InfoContent = (props) => {
  return (
    <div className="info-content">
      <h1 className="name" title={props.name}>
        {props.name}
      </h1>
      <p className="title">Web developer</p>
    </div>
  )
}

export default InfoContent
