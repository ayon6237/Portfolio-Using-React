import React from 'react'

import './Second_Header.css'
import './res_Sec.css'

const Second_Header = () => {

  
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' ,block:'center'});
    }
  }
  return (
    <div className='second-header-container'>
      <ul className='shui'>
        <li className='shli'><a onClick={() => handleScroll("home")}>Home</a></li>
        <li className='shli'><a onClick={() => handleScroll("about")}>About</a></li>
        <li className='shli'><a onClick={() => handleScroll("skill")}>Skill</a></li>
        <li className='shli'><a onClick={() => handleScroll("contact")}>Contact me</a></li>
      </ul>
    </div>
  )
}

export default Second_Header
