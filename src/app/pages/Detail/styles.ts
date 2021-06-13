import styled, { css } from 'styled-components'
import { BiArrowBack } from 'react-icons/bi'

const IconCSS = css`
width:2.5em;
height:4.5em;
color:var(--white);
`;

export const ArrowLeft = styled(BiArrowBack)`
  ${IconCSS};
`;

//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    background: black;

    .back{
        border:none;
        background: transparent;
        position: absolute;
        top:0em;
        left:1em;

        transition: 0.2s;
    }

    .back:hover{
        opacity: 0.8;
    }

    .header{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        padding: 2em;
        flex:1;
        img{
            width:25em;
            height: 25em;
            border:0.3em solid var(--white);
        }
        .text{
            /* flex:0.4; */
            display:flex;
            flex-direction: column;
            padding:1em;
            h1{
                margin:0.6em 0em;
                font-size:3.2em;
                background: red;
                padding: 0.1em;
            }

            span{
                font-size:1.7em;

            }
        }

    }
    .content{
        background: transparent;
    }

    .buttons{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;

        padding: 0em 13em;
        button{
            background: red;
            color:white;
            width: 100%;

            padding: .6em 4em;

            font-size:1.8em;
            font-weight: bold;
            
            border-bottom: 0.2em solid white ;

            margin-left:1em;
            margin-top: 1.5em;

            transition:0.2s;
        }

        button:hover{
            background: white;
            color:red;
            border-bottom: 0.2em solid red ;

        }

        button:disabled{
            background: white;
            color:red;
            border-bottom: 0.2em solid red ;
        }
    }

        //Estilo para o browser
        @media( min-width: 900px ) {

            .header{
                display:flex;
                flex-direction:row;
                justify-content: space-evenly;
             
                .text{
                    width:50%;
                    display:flex;
                    flex-direction: column;
                h1{
                    font-size:3.2em;
                    margin:0.6em 0em;
                }
                span{
                    font-size:1.4em;

                }
            }
            .buttons{
            flex-direction:row;
            }
        }

}
`