import React from 'react'
import './Component5.css'
import mobile from '../images/mobile.png'
import laptop from '../images/laptop.png'
import traffic from '../images/traffic.png'

const Component5 = () => {
    return (
     <div>
             <div className='whole_div'>
            <div className='div_res'>
                <h1>The benefits of my work</h1>
            </div>
            <div className='flex_div'>
                <div className='flex'>
                    <div className='flex00'>
                        <img src={mobile} alt="" />
                        <img src={laptop} alt="" />
                    </div>
                    <h1 className='h1111'>Always Responsive</h1>
                    <p>
                        Responsive websites are designed to be accessed across all devices regardless of size of devicescreen.
                    </p>
                </div>
                <div className='flex'>
                    <div className='traffic1'>

                    </div>
                    <h1 className='h1111'>Mordern Design</h1>
                    <p>
                        The web has changed a lot since the dark ages. Don't miss out on all the new technologies available.
                    </p>
                </div>
                <div className='flex'>
                    <div className='traffic'>
                        <img src={traffic} alt="" />
                    </div>
                    <h1 className='h1111'>More Traffic</h1>
                    <p>
                        A properly built project will generate more views, which translates to more business for you!
                    </p>
                </div>
            </div>
        </div>
        <div className='process'>
                <h1 className='h1114'>THE PROCESS</h1>
            </div>
     </div>   
    )
}

export default Component5