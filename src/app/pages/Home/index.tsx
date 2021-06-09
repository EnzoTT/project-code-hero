import {useEffect} from 'react'
import api from '../../services/api'

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
     Home
   </Container>
   )
}

export default Home;