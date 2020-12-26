import React from 'react'
import getUser from '../utils/getUser'
import {RiGitRepositoryLine} from 'react-icons/ri'
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';


//Front-end
const Index = (props) => {
// desctruction assigment, no qual user e repos é passado como parametro diretamente, e no código não precisara colocar props no inicio!
//const Index = ({repos,user}) => {
    return (
        // key -> identificação do repositório
        //<div className='bg-network'> 
        <div className='bg-network container mx-auto body'> 
            <PageHead/>            
            <Hero/>     

            
            <div className=' simple-linear  rounded-full py-3 tracking-widest shadow-2xl'>                 
                <div className=''>
                    <h1 className='uppercase text-center font-display text-gray-900 text-5xl'>what i do</h1>
                    <div className='flex items-center justify-center divide-x divide-primary text-sm px-5 md:py-5 md:text-2xl mt-5 mb-10 leading-8 text-blue-900 font-bold uppercase'>
                        <h2 className='md:pr-5 md:pl-5 pr-2 pl-2'>FullStack Developer</h2>
                        <h2 className='md:pr-5 md:pl-5 pr-2 pl-2'>Computer Engineer</h2>
                        <h2 className='md:pr-5 md:pl-5 pr-2 pl-2'>Marketing Enthusiast</h2>
                    </div>
                </div>
            </div>
            
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
                
            <h4 className='font-display text-4xl text-center pt-8 uppercase'>TECH CONTRIBUTIONS</h4>
            <p className='flex items-center justify-center font-medium text-xl mx-8 text-center'>Github stats: <RiGitRepositoryLine/> {props.user.public_repos - 1}  </p>            
            <div className ='md:grid md:grid-cols-2 gap-4 my-6'>
                {props.repos.map(repo => {
                    return(
                        <div key ={repo.id} className='text-center text-xl rounded-t-lg bg-primary bg-opacity-30 mx-8 my-2 p-4 hover:shadow-md'>
                            <h5 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h5>
                            <p className='font-medium'>Language: {repo.language}</p>
                            
                        </div>)
                })}
            </div>
            
            <div>
                <p className='text-center py-12 '>You can find the source-code of this website:
                <br />
                <a className='font-bold hover:underline' href='https://github.com/Igor-Moreira/CV'>https://github.com/Igor-Moreira/CV</a>
                </p>
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