import styled from 'styled-components'

//Estilo das Tabs que sao iguais
//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    background: white;
    color:black;
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    .header{
        display:flex;
        flex-direction: column;
        justify-content: center;
        h1{
            font-size: 3em;
            color:white;
            background: red;
            padding:0.2em 0.4em;
            margin-bottom:0.2em;
        }
        span{
            font-size: 1.8em;
        }
    }

    .cardGrid{
        display:grid;
        grid-template-columns:26em 26em;
        gap: 1em;
    }

    //Estilo para o browser
    @media( min-width: 900px ) {
        .cardGrid{
        display:grid;
        grid-template-columns:26em 26em 26em 26em 26em 26em;
        gap: 1em;
    }

    }
`