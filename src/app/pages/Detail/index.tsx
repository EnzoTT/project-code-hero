import { useEffect, useState } from 'react'
import { Container } from './styles'

import Navbar from '../../components/Navbar'
import api from '../../services/api'

const Detail = (Props: any) => {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default Detail;