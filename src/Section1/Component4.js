import React from 'react'
import "./Component4.css"
import trad from '../images/Trad.png'
const Component4 = () => {
  return (
    <div>
        <div className='div2'>
        <h1 className='h11'>Currently Working on</h1>
    </div>
    <div className='wrapper_div'>
    <a href="https://singular-biscuit-1fbb14.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='web_app'>
        <h1 className='h113'>TradExpress</h1>
        <img className='rock' src={trad} alt="" />
        <h5 className='h55'>A fully responsive cryptocurrency website</h5>
        <h6 className='h66'>Front-End</h6>
        <h6 className='h66'>REACT - JS</h6>
    </div>
   </a>
    </div>
    </div>
  )
}

export default Component4