import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    return(
        <div className=''>
            <div className='relative border-primary border rounded  py-4 mt-6 pt-10 shadow-lg'>
                <h1 className='absolute rounded-lg bg-primary py-2 px-6 top-0 mx-16 -mt-5 text-white text-xl font-bold uppercase'>Contact me</h1>
                <ul className='flex items-center justify-center  text-4xl mt-2 mb-5'>
                    <li  className='pr-8 pl-8'><a href='https://api.whatsapp.com/send?phone=553498365664'><IoLogoWhatsapp /></a></li>
                    <li  className='pr-8 pl-8'><a href='https://www.linkedin.com/in/igormoreiraufu/'><AiFillLinkedin /></a></li>
                    <li  className='pr-8 pl-8'><a href='https://github.com/Igor-Moreira'><FaGithub /></a></li>
                </ul>
                <h1 className='flex items-center justify-center'> or drop a line: igor_moreira@live.com </h1>                                                            
            </div>
        </div>
    )
}
export default ContactMe