import React from 'react'
import { FaPinterest } from 'react-icons/fa';
import {FaSpotify} from 'react-icons/fa'

const Hobbies = () => {
    return( 
            <div className='md:grid md:grid-cols-6 md:gap-4 grid grid-cols-2 '>              
           
                <div className='md:col-start-2 col-start-1 md:col-span-2 pt-28'>                      
                    <button className='absolute rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125 bg-primary py-2 px-10 md:px-12 md:mx-8 mx-10 -mt-5' href='https://open.spotify.com/playlist/50JMxV65bOe7kD5kKNxTN2'>
                        <a href='https://drive.google.com/file/d/1b-NiNphT8Zh-NgHWraVgg99lDnGvoF6q/view?usp=sharing'>
                            <h1 className='text-white text-xl font-bold uppercase'>CV</h1>
                        </a>                           
                    </button> 
                </div> 

                <div className='md:col-start-5 col-start-2  pt-16'>                      
                    <div className='relative border-primary border rounded shadow-lg'>
                        <h1 className='absolute rounded-lg bg-primary py-2 px-6 mx-8 -mt-5 text-white text-xl font-bold uppercase'>Hobbies</h1>
                        <ul className='flex items-center justify-center  text-4xl mt-10 mb-5'>                    
                            <li  className='pr-6 pl-6 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-125'>
                                <a href='https://open.spotify.com/playlist/50JMxV65bOe7kD5kKNxTN2'><FaSpotify /></a></li>
                            <li  className='pr-6 pl-6 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-125'>
                                <a href='https://www.pinterest.cl/igor3204/meus-desenhos/'><FaPinterest /></a></li>
                        </ul>                                                          
                    </div> 
                </div> 
            </div>       
    )
}
export default Hobbies