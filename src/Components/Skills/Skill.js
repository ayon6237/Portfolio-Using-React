import React from 'react'

import Card from 'react-bootstrap/Card';

import './Skill.css'
import './res_skills.css'

import data from '../Data'

const Skill = () => {
  return (
    <div className='skill-container' id='skill'>
      <h1>My Skills</h1>

      <div className='skill-card-container'>
          {data.map((item,index)=>{
            return   <Card style={{ width: '2rem' }}>
                    <Card.Img className='card-image' variant="top" src={item.image} />
                    </Card>
          })}
      </div>
    </div>
  )
}

export default Skill
