import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Container } from './styles'

import Card from '../Card'
import Header from '../Header'
import Pagination from '../Pagination'

import api from '../../services/api'

//Teremos duas tabs Content e o Detail
const Content = () => {
    const [characters, setCharacters] = useState<any>([]);
    let history = useHistory();

    //Primeira chamada da api
    useEffect(() => {
        api
            .get(
                `/characters?limit=10`
            ).then((res) => {
                console.log(res)
                setCharacters(res.data.data.results);
            })
    }, [])

    function handlePage(){
        console.log("Troquei de pagina")
    }
    
    function handleCharacters(e:any){
       setCharacters(e)
    }


    function handleDetail(e:any){
        // history.push('/detail')
        console.log(e)
     }
    return (
        <Container>
            <Header handleCharacters={handleCharacters}/>
            <div className="charactersContainer">
                <div className="legend">
                    <span className="character">Personagem</span>
                    <div className="moreInfo">
                        <span className="hideText">Série</span>
                        <span className="hideText">Eventos</span>
                    </div>
                </div>
                    {
                        characters.map((item: any, index: number) => {
                            return (
                                <div className="cardContainer" onClick={handleDetail.bind(this,item)}>
                                <Card character={item}/>
                                </div>
                            )
                        })
                    }
            </div>
            <Pagination handlePage={handlePage}/>
        </Container>
    )
}

export default Content