import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
    return(
        <div className='md:grid md:grid-cols-4 pt-16 leading-none '>                            
            <div className='md:col-start-2 md:col-span-2'>
                <div className='pt-60 md:pt-32'> 
                    <h1 className='font-sans font-medium text-2xl tracking-widest '>Hi, I'm</h1>
                    <h1 className='font-display text-5xl tracking-wider'>Igor Moreira</h1>
                    <h1 className='font-sans font-bold text-2xl tracking-widest '>Computer Engineer</h1>
                   <ContactMe/>
                </div>                    
            </div>
            <div className=' md:col-start-7 md:col-span-2 '>
                <img className='sm:mx-12' src ='/images/Igor-Moreira.png'/>
            </div>
        </div>
    )
}
export default Hero