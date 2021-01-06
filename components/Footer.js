import React from 'react'

const Footer = ({ currentDate }) =>{
    return(
        <div>
            <p className='font-sans text-center py-12 '>I used NextJS + SSR (Server Side Rendering) + Vercel (as platform)
            <br /> You can find the source-code of this website:
            <br />
            <a className='font-sans font-bold hover:underline' href='https://github.com/Igor-Moreira/CV'>https://github.com/Igor-Moreira/CV</a>
            </p>
         </div>

    )
}
export default Footer