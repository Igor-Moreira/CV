import React from 'react'
//Front-end
//const Index = (props) => {
// desctruction assigment, no qual user e repos é passado como parametro diretamente, e no código não precisara colocar props no inicio!
const Index = ({repos,user}) => {
    return (
        // key -> identificação do repositório
        <div className='container mx-auto'>                        
            <h2 className='font-bold text-3xl text-center'>Meus repositórios no github</h2>
            <p>Github stats: public_repos: {user.public_repos} </p>            
            {repos.map(repo => {
                return(
                    <div key ={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
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
    const request = await fetch(process.env.API_URL + '/api/getUser')
    const {repos, user} = await request.json()
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


/*
export async function getServerSideProps(context){
    const resUser = await fetch('https://api.github.com/users/Igor-Moreira')
    const user = await resUser.json()

    const resRepos = await fetch('https://api.github.com/users/Igor-Moreira/repos?sort=updated')
    const originalRepos = await resRepos.json()

    //filtragem dos repositorios
    const dontShowRepos = ['Igor-Moreira/Project1']//Project === 0
    //só irá mostrar os repositorios com valor igual a -1
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    //filtagem de dados para melhorar o carregamento da página
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })
    const repos = originalRepos
                    .filter(dontShowFilter)
                    .map(extractData)

    return {
        props:{
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
*/