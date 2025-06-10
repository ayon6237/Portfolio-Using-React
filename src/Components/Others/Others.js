import React, { useState } from 'react'
import './Others.css'
import './res_others.css'

const Others = () => {

  const [email,setEmail]=useState("");
  const [text,setText]=useState("");

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        access_key:"2249df88-cbd4-4e07-a502-b92f3d87e72a",
        email:email,
        message:text
      })
    });

    const result = await response.json();
    if(result.success){
      alert("Your message is successfully delivered to Owner");
    }else{
      alert("Doesn't successfully delivered the message");
    }
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleAreaChange=(e)=>{
    setText(e.target.value);
  }

  return (
    <form id='contact' className={"form-container"} onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <div className='form-input-fields'>
        <label htmlFor='email'>Email : </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <br/>
        <label htmlFor='text-area'>Write your message : </label>
        <input type='text-area' value={text} onChange={handleAreaChange} />
        <br/>
        <button type="submit">Submit Your Message</button>
      </div>
    </form>
  )
}

export default Others
