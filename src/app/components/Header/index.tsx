import { Container,SearchIcon } from "./styles"

const Header = () => {

    return (
        <Container>
            <h1>Busca de Personagens</h1>
            <div className="search">
                <h1>
                    Nome do personagem
                </h1>
                <div className="inputGroup">
                <input type="text" placeholder="Search"/>
                <SearchIcon/>
                </div>
            </div>
        </Container>
    )
}

export default Header;