import React from 'react'
import getUser from '../utils/getUser'
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Repos from '../components/Repos/index'

//Front-End
const Index = ({repos,user}) => {
    return (

        <div className='bg-network container mx-auto body'> 
            <PageHead/>            
            <Hero/> 
            <Summary/>
            <Education/> 
            <Repos user={user} repos={repos}/>
            <Footer/>        
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