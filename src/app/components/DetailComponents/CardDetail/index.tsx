 import {Container} from './styles'

 //Card da pagina detail
 const CardDetail=(Props:any)=>{
    return(
        <Container>
            <img src={`${Props.item.thumbnail.path}.${Props.item.thumbnail.extension}`} alt="" />
            <h1>
            {Props.item.title}
            </h1>
        </Container>
    )
 } 

 export default CardDetail;