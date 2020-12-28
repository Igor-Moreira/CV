import React from 'react'

const Repo = ({repo}) =>{
    return(
        <div className='text-center text-xl rounded-t-lg bg-primary bg-opacity-30 mx-8 my-2 p-4 hover:shadow-md'>
            <h5 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h5>
            <p className='font-medium'>Language: {repo.language}</p>        
        </div>

    )
}
export default Repo