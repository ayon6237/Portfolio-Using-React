import React from 'react'
import './Linker.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Linker = () => {
  return (
    <div className='linker-list'>
        <a href="https://github.com/ayon6237"> <FaGithub className="icon"/></a>
        <a href="https://www.linkedin.com/in/ayon-banerjee-ab672324b/"><FaLinkedin className="icon"/></a>
        <a href="https://www.facebook.com/ayana.bandyopadhyaya"><FaFacebook className="icon"/></a>
        <a href="#"> <FaInstagram className="icon"/></a> 
     
    </div>
  )
}

export default Linker
