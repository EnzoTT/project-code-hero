import {useEffect} from 'react'
import api from '../../services/api'

import Navbar from '../../components/Navbar'
import Header from '../../components/Header'


import {Container} from './styles'


const Home=()=>{
    useEffect(() => {
        api
         .get(
           `/characters`
         ).then((res) => {
           console.log(res)
         })
       }, [])
       
return(
   <Container>
     <Navbar/>
     <Header/>
   </Container>
   )
}

export default Home;