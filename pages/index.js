import React from 'react'
import getUser from '../utils/getUser'

//Front-end
const Index = (props) => {
// desctruction assigment, no qual user e repos é passado como parametro diretamente, e no código não precisara colocar props no inicio!
//const Index = ({repos,user}) => {
    return (
        // key -> identificação do repositório
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 pt-16 leading-none'>               
                <div className='col-start-1 pt-20'> 
                    <h1 className='font-medium text-2xl tracking-widest'>Hi, I'm</h1>
                    <h1 className='font-display text-5xl tracking-wider'>Igor Moreira</h1>
                    <h1 className='font-bold text-2xl tracking-widest'>Computer Engineer</h1>
                </div>
                <div className='col-start-2 '><img src ='/images/Igor-Moreira.png'/></div>
            </div>
            
            <div className='bg-primary bg-opacity-75  rounded-full py-3 px-10  tracking-widest '>                 
                    <h1 className='opacity-100 uppercase text-center font-display text-gray-900 text-4xl'>what i do</h1>
                    <div className='flex items-center justify-center text-2xl mt-2 leading-8 text-white font-bold'>
                        <h1 className='pr-8 pl-8'>FullStack Developer</h1>
                        <h1 className='pr-8 pl-8 '>Computer Engineer</h1>
                        <h1 className='pr-8 pl-8'>Marketing Enthusiast</h1>
                    </div>
            </div>
            
            <h2 className='font-display text-4xl text-center'>Meus repositórios no github</h2>
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