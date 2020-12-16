import React from 'react'
import getUser from '../utils/getUser'

//Front-end
const Index = (props) => {
// desctruction assigment, no qual user e repos é passado como parametro diretamente, e no código não precisara colocar props no inicio!
//const Index = ({repos,user}) => {
    return (
        // key -> identificação do repositório
        <div className='container mx-auto '>
            <div className='grid grid-cols-4 pt-16 leading-none '>                            
                <div className=' col-start-2 col-span-2 pt-30 '>
                    <div className='pt-48'> 
                        <h1 className='font-medium text-2xl tracking-widest'>Hi, I'm</h1>
                        <h1 className='font-display text-5xl tracking-wider'>Igor Moreira</h1>
                        <h1 className='font-bold text-2xl tracking-widest'>Computer Engineer</h1>
                        <div className='pt-20'>
                            <div className='shadow-lg border-current'>
                                <h1 className=''>Contact me</h1>
                                <h1>Linkedin</h1>
                                <h1>Github</h1>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className=' col-start-7 col-span-2'><img src ='/images/Igor-Moreira.png'/></div>
            </div>
            
            <div className=' bg-gradient-to-r from-transparent via-primary  rounded-full py-3 tracking-widest shadow-2xl'>                 
                <div className=''>
                    <h1 className='uppercase text-center font-display text-gray-900 text-5xl'>what i do</h1>
                    <div className='flex items-center justify-center  py-5 text-3xl mt-5 mb-10 leading-8 text-blue-900  font-bold'>
                        <h1 className='pr-8 pl-8 '>FullStack Developer</h1>
                        <h1 className='pr-8 pl-8 '>Computer Engineer</h1>
                        <h1 className='pr-8 pl-8'>Marketing Enthusiast</h1>
                    </div>
                </div>
            </div>
            
            <h2 className='font-display text-4xl text-center pt-8 uppercase'>TECH CONTRIBUTIONS</h2>
            <p className='font-medium text-xl'>Github stats: public_repos: {props.user.public_repos} </p>            
            {props.repos.map(repo => {
                return(
                    <div key ={repo.id} className='text-xl rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language}</p>
                        
                    </div>)
            })}
           
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