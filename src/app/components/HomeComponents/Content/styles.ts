import styled,{css} from 'styled-components'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import {CgChevronDoubleLeft,CgChevronDoubleRight} from 'react-icons/cg'

interface ISelected {
    selected?: boolean;
  }

const IconCSS = css`
width:2em;
height:4em;
color:var(--smoke);
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  ${IconCSS};
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  ${IconCSS};
`;

export const DoubleArrowLeft = styled(CgChevronDoubleLeft)`
  ${IconCSS};
`;
export const DoubleArrowRight = styled(CgChevronDoubleRight)`
  ${IconCSS};
`;


//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    width:100%;
    background:var(--dark-snow);
    .charactersContainer{
        padding:0em 2.4em;
        margin-top:3.2em;
        min-height:70vh;
        //Legenda
        .legend{
            color:var(--smoke);
            font-size:1.2em;
            display:flex;
            margin-bottom:0.8em;
            .character{
                padding-left:8.6em;
                width:32em;
                display:flex;
            }
            .moreInfo{
                display:none;
            }
        }
    }
    //Card div
    .cardContainer{
        transition: 0.2s;
    }
    .cardContainer:hover{
        cursor:pointer;
        box-shadow: 0em 0em 0.5em var(--black);

    }
    //Pagination div
    .pagination{
        width: 100%;
        padding:2.5em;
        background: var(--white);
        margin-top:1.6em;
        display: flex;
        align-items:center;
        justify-content:center;
    
        .icon{
            display:flex;
            background: transparent;
            border:none;
            width:auto;
            height:auto;
        }
        .icon:hover{
            background: transparent;
            border:none;
            width:auto;
            height:auto;
        }
        .icon:disabled{
            display:none;
        }
    }
    //Estilo do container de paginacao
    @media( min-width: 900px ) {
        .charactersContainer{
        padding:0em 11.3em;
        margin-top:4.3em;
        .legend{
            color:var(--smoke);
            font-size:1.2em;
            display:flex;
            .moreInfo{
                display:flex;
                flex:1;
                .hideText{
                    width:50%;
                }
            }
            
        }
        }
    }

`

//Botao da paginacao
export const Button = styled.div<ISelected>`
        width:3.2em;
        height:3.2em;
        display: flex;
        align-items:center;
        justify-content: center;
        border-radius: 0.4em;
        border: 0.1em solid var(--dark-snow);

        margin: 0em 0.4em; 
        //Se o botao estiver selecionado
        background:${({ selected }) =>
        selected ? "var(--dark-blue)" : "var(--snow)"};
        color:${({ selected }) =>
        selected ? "var(--white)" : "var(--dark-smoke)"};

        span{
            font-size: 1.4em;
        }

        :hover{
            color:var(--white);
            background:${({ selected }) =>
            selected ? "var(--dark-blue)" : "var(--blue)"};
        }

        cursor:pointer;

`

