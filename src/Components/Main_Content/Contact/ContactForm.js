import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons"


function ContactForm() {

  const [form,setForm]=useState({
    fullname:'',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
  }


  return (
    <section className='contact-form'>
      <h3 className='h3 form-title'>Contact Form</h3>

      <form action='#' className='form' data-form onSubmit={(e)=>handleSubmit(e)}>
        <div className='input-wrapper'>
          <input
            type='text'
            name='fullname'
            className='form-input'
            placeholder='Full name'
            required
            data-form-input
            onChange={(e)=>handleChange(e)}
          />

          <input
            type='email'
            name='email'
            className='form-input'
            placeholder='Email address'
            required
            data-form-input
            onChange={(e)=>handleChange(e)}
          />
        </div>

        <textarea
          name='message'
          className='form-input'
          placeholder='Your Message'
          required
          data-form-input
          onChange={(e)=>handleChange(e)}
        ></textarea>

        <button className='form-btn' type='submit' disabled data-form-btn>
          <IonIcon name='paper-plane'></IonIcon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
