import React from 'react'

const Index = ({repos,user}) => {
    return (
       
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

export default Index

