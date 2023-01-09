import React from 'react'
import './Component3.css'
import rock from '../images/Rock.png'

const Component3 = () => {
  return (
    <div>
        <div className='div2'>
        <h1 className='h11'>Web Apps</h1>
    </div>
    <div className='wrapper_div'>
    <a href="https://singular-biscuit-1fbb14.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='web_app'>
        <h1 className='h113'>Rock Paper Scissors</h1>
        <img className='rock' src={rock} alt="" />
        <h5 className='h55'>A fun version of classic game Rock, Paper.Scissors.</h5>
        <h6 className='h66'>Front-End</h6>
        <h6 className='h66'>REACT - JS</h6>
    </div>
   </a>
    </div>

    </div>
  )
}

export default Component3