import React from 'react'
import getUser from '../utils/getUser'
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import {RiGitRepositoryLine} from 'react-icons/ri'


//Front-end
const Index = (props) => {
// desctruction assigment, no qual user e repos é passado como parametro diretamente, e no código não precisara colocar props no inicio!
//const Index = ({repos,user}) => {
    return (
        // key -> identificação do repositório
        //<div className='bg-network'> 
        <div className='bg-network'> 
        
            <div className='container mx-auto'>
                   
                <div className='grid grid-cols-4 pt-16 leading-none '>                            
                    <div className='col-start-2 col-span-2'>
                        <div className='pt-32'> 
                            <h1 className='font-medium text-2xl tracking-widest '>Hi, I'm</h1>
                            <h1 className='font-display text-5xl tracking-wider'>Igor Moreira</h1>
                            <h1 className='font-bold text-2xl tracking-widest '>Computer Engineer</h1>
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
                    </div>
                    <div className=' col-start-7 col-span-2'><img src ='/images/Igor-Moreira.png'/></div>
                </div>
            
                <div className=' simple-linear  rounded-full py-3 tracking-widest shadow-2xl'>                 
                    <div className=''>
                        <h1 className='uppercase text-center font-display text-gray-900 text-5xl'>what i do</h1>
                        <div className='flex items-center justify-center  py-5 text-2xl mt-5 mb-10 leading-8 text-blue-900  font-bold uppercase'>
                            <h2 className='pr-5 pl-5'>FullStack Developer</h2>
                            <h2 className='pr-5 pl-5'>Computer Engineer</h2>
                            <h2 className='pr-5 pl-5'>Marketing Enthusiast</h2>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h1 className='uppercase text-center font-display text-gray-900 text-5xl tracking-widest pt-16'>my education</h1>
                    <h1 className='pt-16'></h1>
                </div>
            
                <div className='flex items-center justify-center '>
                    <div className='bg-gradient-to-r from-transparent via-primary shadow-2xl ellipse flex items-center justify-center '>                 
                        <div className='text-center leading-8 text-blue-900 uppercase tracking-widest'>
                            <h3 className='text-xl font-bold'>graduation degree</h3>
                            <h3 className='pr-8 pl-8 font-regular text-3xl pt-6'>Computer Engineer</h3>
                            <h3 className='pr-8 pl-8 pt-5 font-bold text-xl pt-6'>ufu - university of uberlândia</h3>
                        </div>
                    </div>
                </div>                     
                
                <h4 className='font-display text-4xl text-center pt-8 uppercase'>TECH CONTRIBUTIONS</h4>
                <p className='flex items-center justify-center font-medium text-xl mx-8 text-center'>Github stats: <RiGitRepositoryLine/> {props.user.public_repos - 1}  </p>            
               <div className ='grid grid-cols-2 gap-4 my-6'>
                    {props.repos.map(repo => {
                        return(
                            <div key ={repo.id} className='text-center text-xl rounded-t-lg bg-primary bg-opacity-30 mx-8 my-2 p-4 hover:shadow-md'>
                                <h5 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h5>
                                <p className='font-medium'>Language: {repo.language}</p>
                                
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
// td dentro desse export será injetado dentro de Index como propriedade, esse trecho será executado
// no servidor (Backend)
export async function getServerSideProps(context){
    const {repos, user} = await getUser('Igor-Moreira')
    return {
        props:{
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
// foram ES6 
export default Index

//<pre>{JSON.stringify(props.repos, null, 2)}</pre> 
//data <div>{props.currentDate}</div>