import React from 'react'
import './Footer.css'
import ig from './images/IG.png'
import tw from './images/tw.png'
import git from './images/git.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_flex'>
            <a href="https://instagram.com/bossmaster112"><img src={ig} alt="" /></a>
            <a href="https://twitter.com/bossmaster112"><img src={tw} alt="" /></a>
            <a href="https://github.com/osuerekelvin"><img src={git} alt="" /></a>
        </div>
        <p className='pp1'>© 2023 Osuere Kelvin</p>
    </div>
  )
}

export default Footer