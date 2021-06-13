import { useState } from "react"
import { Container, SearchIcon } from "./styles"

const Header = (Props: any) => {
    const [name, setName] = useState<any>("")

    return (
        <Container>
            <h1>Busca de Personagens</h1>
            <div className="search">
                <h1>
                    Nome do personagem
                </h1>
                <div className="inputGroup">
                    <input type="text" placeholder="Search" value={name} onChange={
                        (e) => {
                            setName(e.target.value)
                            Props.handleName(e.target.value)
                        }} />

                    <SearchIcon onClick={Props.handleSearch} />

                </div>
            </div>
        </Container>
    )
}

export default Header;