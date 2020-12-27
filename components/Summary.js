import React from 'react'

const Summary = () => {
    return(                       
            <div className='simple-linear  rounded-full py-3 tracking-widest shadow-2xl'>
                <h1 className='uppercase text-center font-display text-gray-900 text-5xl'>what i do</h1>
                <div className='flex items-center justify-center divide-x divide-primary text-sm px-5 md:py-5 md:text-2xl mt-5 mb-10 leading-8 text-blue-900 font-bold uppercase'>
                    <h2 className='md:pr-5 md:pl-5 pr-2 pl-2'>FullStack Developer</h2>
                    <h2 className='md:pr-5 md:pl-5 pr-2 pl-2'>Computer Engineer</h2>
                    <h2 className='md:pr-5 md:pl-5 pr-2 pl-2'>Marketing Enthusiast</h2>
                </div>
            </div>      
    )
}
export default Summary