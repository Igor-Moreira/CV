import React from 'react'

const Repo = ({repo} ) =>{
   
    return(
        <div className='text-center text-xl rounded-t-lg bg-primary bg-opacity-30 mx-8 my-2 p-4 hover:shadow-md'>
            <h5 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h5>
            <p className='font-medium'>Language: {repo.language}</p>
            <p className='font-medium transition duration-500 ease-in-out hover:text-primary transform hover:-translate-y-1 hover:scale-125'>
                <a href={repo.homepage}>{repo.homepage}</a>
            </p>     
        </div>
    )
}
export default Repo