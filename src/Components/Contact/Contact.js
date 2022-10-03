import React from 'react';
import './Contact.css';

// icons 
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';


function Contact() {
  return (
    <>
        <div className="contact">
            <h1>Contact Me</h1>
            <h4>Get in touch</h4>
            <div className="contact_form">
                <div className='contact_form_1'>
                      <h3> <FaRegComment /> Talk to me</h3>
                    <div>
                        <p>Email</p>
                        <p className='addres'>azizbeanvarjanov@gmail.com</p>
                    </div>
                    <div>
                        <p>Telegram</p>
                          <p className='addres'><a href="https://t.me/azizbek_7775">@azizbek_7775</a></p>
                    </div>
                    <div>
                        <p>Phone number</p>
                        <p className='addres'><a target="_blank" href="tel:+998882547775">+998 254 77 75</a></p>
                    </div>
                </div>

                
                <div className='contact_form_2'>
                      <h3> <RiSendPlaneLine/> Write your me message</h3>
                        <fieldset className='input'>
                              <legend>Name</legend>
                              <input name="name" required type="text" placeholder='Write your name' />
                        </fieldset>
                    <fieldset className="input">
                        <legend>Email</legend>
                        <input name='email' required type="email" placeholder='Write your email'/>
                    </fieldset>
                    <fieldset className="textarea">
                        <legend>Message</legend>
                        <textarea name='message' required placeholder='Write your subject'></textarea>
                    </fieldset>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact