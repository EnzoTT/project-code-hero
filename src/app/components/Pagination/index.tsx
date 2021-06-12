import { Container, Button, ArrowLeft, ArrowRight } from './styles'

const Pagination = (Props: any) => {
    return (
        <Container>
            <Button className='icon'>
                <ArrowLeft />
            </Button>
            <Button>
                <span>1</span>
            </Button>
            <Button>
                <span>1</span>
            </Button>
            <Button className='icon'>
                <ArrowRight />
            </Button>
        </Container>
    )
}

export default Pagination;

