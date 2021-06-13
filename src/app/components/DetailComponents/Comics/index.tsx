import { useEffect } from 'react'

import { Container } from './styles'
import api from '../../../services/api'
import { useState } from 'react'


const Comics = (Props: any) => {
    const [comicArray, setComicArray]=useState([])
    useEffect(() => {
        // api.get('/characters/1009146/comics')
        // .then((res)=>{

        // })

        
    }, [])
    return (
        <Container>
            <h1>COMICS</h1>
            <span>The most recent comic books {Props.name} apears.</span>
        </Container>
    )
}

export default Comics;