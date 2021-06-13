import {useEffect} from 'react'

import {Container} from './styles'
import api from '../../../services/api'


const Series=(Props:any)=>{
    useEffect(()=>{
        
    },[])
    return(
        <Container>
            <h1>Series</h1>
            <span>The most recents Series that {Props.name} apears.</span>
        </Container>
    )
}

export default Series;