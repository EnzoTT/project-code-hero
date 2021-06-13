import { useEffect, useState } from 'react'

import { Container } from '../styles/styles'

import api from '../../../services/api'

import CardDetail from '../CardDetail'


const Events = (Props: any) => {
    const [eventsArray, setEventsArray] = useState<any>([])

    //Pega os eventos desse persanogem pela api
    useEffect(() => {
        api.get(`/characters/${Props.id}/events?limit=24`)
            .then((res) => {
                setEventsArray(res.data.data.results)
            })
    }, [Props.id])


    return (
        <Container>
            <div className="header">
                <h1>EVENTS</h1>
                <span>The most recents events that {Props.name} apears.</span>
            </div>
            <div className="cardGrid">
                {
                    eventsArray.map((item:any) => {
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

export default Events;