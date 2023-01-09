import React from 'react'
import './Component7.css'
import emailjs from 'emailjs-com';

import location from '../images/location.png'
import mail from '../images/mail.png'
import phone from '../images/phone.png'
import { useRef } from 'react';

const Component7 = () => {
    const form = useRef();

    const sendEmail = (e)=> {
        e.preventDefault()
    

        emailjs.sendForm('service_jr3js6e', 'template_q7zo8d6', form.current, 'LSxOBl4nyHloSNoXT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
        );
        e.target.reset()
    }
  return (
    <div className='parent' id='contactme'>
        <div className='parent1'>
            <div className='child'>
                <h1 className='h1111'>Contact Disclosure</h1>
                <p>
                    I look forwardto hearing about how i can help with your next project
                </p>
                <p>
                    I'll answerall inquires as soon as humanly possible!
                </p>
            </div>
            <div className='child1'>
            <h1 className='Cont'>CONTACT ME</h1>
            <hr className='Line'/>
            <div className='flex01'>
                <img src={location} alt="" />
                <h5>Lagos State, Nigeria</h5>
            </div>
            <div className='flex01'>
                <img src={mail} alt="" />
                <h5>osuerekelvin27@gmail.com</h5>
            </div>
            <div className='flex01'>
                <img src={phone} alt="" />
                <h5>+234 9068195927</h5>
            </div>
            <form ref={form} onSubmit = {sendEmail} >
              <div className="Input">
                <h2 className="inTouch">
                  Lets get in touch. Send me a message
                </h2>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="inputName"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="inputEmail"
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="4"
                  placeholder="Message"
                  className="inputText"
                />
                <button className="Btnsend" type="submit"  value="Send">
                  SEND MESSAGE
                </button>
              </div>
            </form>
        </div>
        </div>
        <p></p>
    </div>
  )
}

export default Component7