import React from 'react'
import './Component1.css'
import arrow from '../images/arroww.png'


const Component1 = () => {
  return (
  <div>
      <div className='div01'>
       

        <h1 className='h11'>Hello There</h1>
        <h2 className='h22'>
            My name is Kelvin and I'm a lagos State based Full-Stack Web Developer
        </h2>
        <p className='pp'>
            Scroll down to continue
        </p>
        <img className='arrow' src={arrow} alt="" />
    </div>
    <div>
        
    </div>
  </div>
  
  )
}

export default Component1