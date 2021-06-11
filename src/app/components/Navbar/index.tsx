import { Container } from './styles'

import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <Container>
            <div className="logo">
            <img src={Logo} alt="Objective"  />
            </div>
            <div className="userInfo">
                <div className="text">
                    <div className="name">
                    Enzo Trevisan Topanotti
                    </div>
                    Teste de Front-End
                </div>
                <div className="lettersContainer">
                    <h1>ET</h1>
                </div>
            </div>
        </Container>
    )
}

export default Navbar