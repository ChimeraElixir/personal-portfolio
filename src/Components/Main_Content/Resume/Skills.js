import React from 'react'
import { mySkills } from '../../../data'
import SkillList from './SkillList'

const Skills = () => {
  return (
    <section className='skill'>

        <h3 className='h3 skills-title'>My skills</h3>

        <ul className='skills-list content-card'>
          
            {mySkills.map((mySkill,index)=>{
                return <SkillList key={index} {...mySkill} />
            })}
          
        </ul>
      </section>
  )
}

export default Skills
