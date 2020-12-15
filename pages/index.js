import React from 'react'
import getUser from '../utils/getUser'

//Front-end
const Index = (props) => {
// desctruction assigment, no qual user e repos é passado como parametro diretamente, e no código não precisara colocar props no inicio!
//const Index = ({repos,user}) => {
    return (
        // key -> identificação do repositório
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 pt-16'>               
                <div className='col-start-1 pt-20'> 
                    <h1 className='font-medium text-3xl tracking-widest'>Hi, I'm</h1>
                    <h1 className='font-display text-6xl tracking-wider'>Igor Moreira</h1>
                    <h1 className='font-bold text-3xl tracking-widest'>Computer Engineer</h1>
                </div>
                <div className='col-start-2 '><img src ='/images/Igor-Moreira.png'/></div>
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