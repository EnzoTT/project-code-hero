import { useState } from 'react'
import { Container, ArrowLeft } from './styles'
import { useHistory } from 'react-router'

import Comics from '../../components/DetailComponents/Comics'
import Events from '../../components/DetailComponents/Events'
import Series from '../../components/DetailComponents/Series'


const Detail = (Props: any) => {
    let history = useHistory();
    const [character] = useState(Props.history.location.state.character)
    const [eventsTab, setEventsTab] = useState(true);
    const [comicsTab, setComicsTab] = useState(false);
    const [seriesTab, setSeriesTab] = useState(false);

    //Volta para home
    function handleBack() {
        history.push("/")
    }
    //Funcoes handleTab
    function handleEventTab() {
        setEventsTab(true)
        setComicsTab(false)
        setSeriesTab(false)
    }
    function handleComicsTab() {
        setEventsTab(false)
        setComicsTab(true)
        setSeriesTab(false)
    }
    function handleSeriesTab() {
        setEventsTab(false)
        setComicsTab(false)
        setSeriesTab(true)
    }
    return (
        <Container>
            {/* <Navbar /> */}
            {/* Header  */}
            <div className="header">
                <button className="back" onClick={handleBack}>
                    <ArrowLeft />
                </button>
                <div className="img">
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
                </div>
                <div className="text">
                    <h1>{character.name}</h1>
                    <span>{character.description}</span>
                    <div className="buttons">
                        <button onClick={handleEventTab} disabled={eventsTab ? true : false}>Events</button>
                        <button onClick={handleComicsTab} disabled={comicsTab ? true : false}>Comics</button>
                        <button onClick={handleSeriesTab} disabled={seriesTab ? true : false}>Series</button>
                    </div>
                </div>
            </div>

            {/* Tab  */}
            {eventsTab && <Events id={character.id} name={character.name} />}
            {comicsTab && <Comics id={character.id} name={character.name} />}
            {seriesTab && <Series id={character.id} name={character.name} />}

        </Container>
    )
}

export default Detail;