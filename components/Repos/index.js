import React from 'react'
import {RiGitRepositoryLine} from 'react-icons/ri'
import Repo from './Repo'

const Repos = ({ user, repos}) =>{
    return(
        <div>            
            <h4 className='font-display text-4xl text-center pt-16 uppercase'>TECH CONTRIBUTIONS</h4>
            <p className='flex items-center justify-center font-medium text-xl mx-8 text-center'>Github stats: <RiGitRepositoryLine/> {user.public_repos - 1}  </p>            
            <div className ='md:grid md:grid-cols-2 gap-4 my-6'>
                {repos.map(repo => {
                    return(
                        <Repo key={repo.id} repo={repo} />
                    )
                })}                
            </div>
        </div>
    )
}
export default Repos