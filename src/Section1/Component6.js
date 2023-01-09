import React from "react";
import "./Component6.css";
import kelvin from '../images/Kelvin.jpeg'

const Component6 = () => {
  return (
    <div className="about1" id="aboutme">
        <div className="about">
            <h1 className="h1111" >ABOUT ME</h1>
        </div>
        <div className="about_flex">
              <img className="profilee" src={kelvin}   alt="" />
              <p className="p12">
                Kelvin is a Full-Stack web developer who lives in the city of
                Lagos,Nigeria. After studying computer science from 2013 - 2017, i
                decided to learn more which made me a Full-Stack web developer. I have
                always been someone who has both a creative and a logical side. When I
                discovered web developing , I realized it would be the perfect fit. I
                could use my creative side to design and my logical side to code. As a
                bonus, being both designer and developer allows me to make sure no
                detail is lost in translation. I am skilled in HTML, CSS, JavaScript,
                React.js and Node.js. I am determined to become a well-rounded developer
                and am always seeking out new challenges and opportunities to improve my
                skills.
            </p>
        </div>
    </div>
  );
};

export default Component6;
