import styled, {css} from 'styled-components'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const IconCSS = css`
width:2em;
height:4em;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  ${IconCSS};
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  ${IconCSS};
`;

//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    width: 100%;
    padding:2.5em;
    background: var(--white);

    display: flex;
    align-items:center;
    justify-content:center;

    .icon{
        background: transparent;
        border:none;
        width:auto;
        height:auto;
    }

`

export const Button = styled.div`
        width:3.2em;
        height:3.2em;
        display: flex;
        align-items:center;
        justify-content: center;
        border-radius: 0.4em;
        border: 0.1em solid var(--dark-snow);

        margin: 0em 0.4em; 
        //variaveis
        background: var(--snow);
        color:var(--dark-smoke);

        span{
            font-size: 1.4em;
        }

`


