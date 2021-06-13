import {useEffect, useState} from 'react'

import { Container } from '../styles/styles'
import api from '../../../services/api'

import CardDetail from '../CardDetail'


const Series=(Props:any)=>{
    const [seriesArray, setSeriesArray] = useState<any>([])

    //Pega os eventos desse persanogem pela api
    useEffect(() => {
        api.get(`/characters/${Props.id}/series?limit=24`)
            .then((res) => {
                setSeriesArray(res.data.data.results)
            })
    }, [Props.id])


    return (
        <Container>
            <div className="header">
                <h1>SERIES</h1>
                <span>The most recents series that {Props.name} apears.</span>
            </div>
            <div className="cardGrid">
                {
                    seriesArray.map((item:any) => {
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

export default Series;