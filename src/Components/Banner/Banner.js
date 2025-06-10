import React, { useState } from 'react'
import './Banner.css'
import './res_Banner.css'


const Banner = () => {

  const fulltext = "Hi, I'm a passionate and dedicated MERN stack web developer with a strong focus on building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy creating fast, responsive, and user-friendly interfaces while ensuring robust backend functionality and secure API integration.With hands-on experience in both front-end and back-end development, I specialize in developing modern web solutions that solve real-world problems. I'm also comfortable with technologies like RESTful APIs, JWT authentication, Redux, Git, and third-party services like Firebase, Cloudinary, and Stripe.Whether it’s creating scalable systems, real-time applications with Socket.IO, or deploying projects on platforms like Vercel or Render, I bring both technical expertise and problem-solving mindset to every project I work on."

  const shorttext = fulltext.slice(0,500)+"...";

  const [isExpanded,setIsexpanded]=useState(false);

  const handleclick=()=>{
    setIsexpanded(!isExpanded)
  }

  return (
    <div className='banner-container' id='about'>
      <div className='my-image'>
        <img src="/Assets/1693851539834.jpg" alt="" />
      </div>
      <div className='my-details'>
  <p className={`text ${isExpanded ? 'expanded' : 'collapsed'}`}>
    {fulltext}
  </p>
  <button onClick={handleclick}>{isExpanded ? "See less" : "See more"}</button>
</div>

    </div>
  )
}

export default Banner
