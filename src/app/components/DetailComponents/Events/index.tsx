import {useEffect} from 'react'

import {Container} from './styles'
import api from '../../../services/api'


const Events=(Props:any)=>{
    useEffect(()=>{
        
    },[])
    return(
        <Container>
            <div className="header">
            <h1>EVENTS</h1>
            <span>The most recents events that {Props.name} apears.</span>
            </div>
            <div className="cardGrid">
                
            </div>
        </Container>
    )
}

export default Events;