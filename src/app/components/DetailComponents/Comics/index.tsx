import { useEffect } from 'react'

import { Container } from '../styles/styles'
import api from '../../../services/api'
import { useState } from 'react'

import CardDetail from '../CardDetail'



const Comics = (Props: any) => {
    const [comicArray, setComicArray]=useState([])

    //Pega os eventos desse persanogem pela api
    useEffect(() => {
        api.get(`/characters/${Props.id}/comics?limit=24`)
            .then((res) => {
                setComicArray(res.data.data.results)
            })
    }, [Props.id])


    return (
        <Container>
            <div className="header">
                <h1>COMICS</h1>
                <span>The most recents comic books that {Props.name} apears.</span>
            </div>
            <div className="cardGrid">
                {
                    comicArray.map((item:any) => {
                        return (
                            <CardDetail item={item}/>
                        )
                    }
                    )
                }
            </div>
        </Container>
    )
}

export default Comics;