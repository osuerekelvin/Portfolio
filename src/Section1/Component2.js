import React from 'react'
import './Component2.css'
import loop from '../images/loop.png'
import sunny from '../images/Sunny.png'
import task from '../images/Task .png'
import order from "../images/order.jpg"
import zuri from '../images/Zuri.png'
const Component2 = () => {
  return (
   <div id='website'>
     <div className='div2'>
        <h1 className='h11'>Websites</h1>
    </div>
    <div className='grid_div'>
   <a href="https://calm-starship-4ee3d0.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='grid'>
        <h1 className='h113'>Task Duty</h1>
        <img className='loop' src={task} alt="" />
        <h5 className='h55'>A fully responsive task manager website</h5>
        <h6 className='h66'>Front-End / Back-End</h6>
        <h6 className='h66'>REACT - JS/ NODE- JS</h6>
    </div>
   </a>
 
   <a href="https://dainty-conkies-b5fc1a.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='grid'>
        <h1 className='h113'>SunnySide</h1>
        <img className='loop' src={sunny} alt="" />
        <h5 className='h55'>A fully responsive website landing page</h5>
        <h6 className='h66'>Front-End</h6>
        <h6 className='h66'>HTML/CSS</h6>
    </div>
   </a>
 
   <a href="https://statuesque-torte-dc47f4.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='grid'>
        <h1 className='h113'>Loopstudois</h1>
        <img className='loop' src={loop} alt="" />
        <h5 className='h55'>A fully responsive designed website</h5>
        <h6 className='h66'>Front-End</h6>
        <h6 className='h66'>HTML/CSS</h6>
    </div>
   </a>
 
   <a href="https://lighthearted-semolina-46f90b.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='grid'>
        <h1 className='h113'>Order Summary</h1>
        <img className='loop' src={order} alt="" />
        <h5 className='h55'>A fully responsive designed website</h5>
        <h6 className='h66'>Front-End</h6>
        <h6 className='h66'>REACT - JS</h6>
    </div>
   </a>
 
   <a href="https://splendorous-valkyrie-fa7f85.netlify.app" 
   className='no-underline'
   target="blank" 
   >
   <div className='grid'>
        <h1 className='h113'>Zuri</h1>
        <img className='loop' src={zuri} alt="" />
        <h5 className='h55'>A fully responsive profile website</h5>
        <h6 className='h66'>Front-End</h6>
        <h6 className='h66'>REACT - JS</h6>
    </div>
   </a>
 
 
    </div>
   </div>

  )
}

export default Component2