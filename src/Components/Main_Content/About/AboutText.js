import React from 'react'

const AboutText = ({aboutTextData}) => {
  return (
    <section className="about-text ">
          {
            aboutTextData.map((data,index)=>{
              return <p key={index}>{data.p}</p>
            })
          }
        </section>
  )
}

export default AboutText
