import { Container } from './styles'

//Card da pagina Home
const Card = (Props: any) => {
    let series = Props.character.series.items;
    let events = Props.character.events.items;

    return (
        <Container>
            <div className="info">
                <img src={`${Props.character.thumbnail.path}.${Props.character.thumbnail.extension}`} alt="Thumbnail" />
                <h1>{Props.character.name}</h1>
            </div>
            <div className="moreInfo">
                <div className="column">
                    {series.map((item: any, index: any) => {
                        if (index < 3) {

                            return (
                                <div className="name">
                                    {item.name}
                                </div>
                            )
                        }
                        return('')
                    })}
                </div>
                <div className="column">
                    {events.map((item: any, index: any) => {
                        if (index < 3) {

                            return (
                                <div className="name">
                                    {item.name}
                                </div>
                            )
                        }
                        return('')
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Card