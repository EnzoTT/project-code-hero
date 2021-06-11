import styled, {css} from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

const IconCSS = css`
width:2.4em;
height:2.4em;

position:relative;
right:4em;
top:0.9em;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${IconCSS};
`;


//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:center;

    padding:0em 0.2em 0em 2.4em;

     h1{
         font-size:2.7em;
     }

     .search{
        width:100%;
        display:flex;
        text-align:center;
        flex-direction:column;
        h1{
            font-size:1.4em;
            margin:1.2em 0em 0.86em 0em;
        }
        input{
            width:100%;
            height:3.2em;
            border-radius:0.4em;
            border:none;

            padding:1.6em 0.8em 1.6em 0.7em;
        }
     }
    .inputGroup{
        display:flex;
        width:100%;
    }
    //Estilo para o browser
    @media( min-width: 900px ) {

    }
`