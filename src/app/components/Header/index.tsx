import { useState } from "react"
import { Container, SearchIcon } from "./styles"
import api from '../../services/api'


const Header = (Props: any) => {
    const [name, setName] = useState<any>("")

    //Chamada da api para buscas
    function handleSearch() {
        if (name !== '') {
            api
                .get(
                    `/characters?nameStartsWith=${name}&&limit=10`
                ).then((res) => {
                    console.log(res)
                    Props.handleCharacters(res.data.data.results);
                })
        } else {
            api
                .get(
                    `/characters?limit=10`
                ).then((res) => {
                    console.log(res)
                    Props.handleCharacters(res.data.data.results);
                })
        }
    }

    return (
        <Container>
            <h1>Busca de Personagens</h1>
            <div className="search">
                <h1>
                    Nome do personagem
                </h1>
                <div className="inputGroup">
                    <input type="text" placeholder="Search" value={name} onChange={(e) => { setName(e.target.value) }} />

                    <SearchIcon onClick={handleSearch} />

                </div>
            </div>
        </Container>
    )
}

export default Header;