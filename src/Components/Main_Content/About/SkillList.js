import React from 'react'


const SkillList = ({skill,value}) => {
  return (

    <li className='skills-item'>
            <div className='title-wrapper'>
              <h5 className='h5'>{skill}</h5>
              <data value={value}>{`${value}%`}</data>
            </div>

            <div className='skill-progress-bg'>
              <div className='skill-progress-fill' style={{width: `${value}%`}}></div>
            </div>
    </li>
  );
}

export default SkillList
