import React from 'react'

const Education = () =>{
    return(
        <div>
            <div>
                <h1 className='uppercase text-center font-display text-gray-900 text-5xl tracking-widest pt-16'>my education</h1>
                <h1 className='pt-16'></h1>
            </div>
            <div className='flex items-center justify-center '>
                <div className='bg-gradient-to-r from-transparent via-primary shadow-2xl ellipse flex items-center justify-center '>                 
                    <div className='text-center md:leading-8 text-blue-900 uppercase tracking-widest mb-6'>
                        <h3 className='md:text-xl text-lg font-bold'>graduation degree</h3>
                        <h3 className='md:pr-8 md:pl-8 font-regular md:text-3xl text-2xl md:pt-6 pt-2'>Computer Engineer</h3>
                        <h3 className='md:pr-8 md:pl-8 md:pt-5 font-bold md:text-xl text-base md:pt-6 pt-2'>ufu - university of uberlândia</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education