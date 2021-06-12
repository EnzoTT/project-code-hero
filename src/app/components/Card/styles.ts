import styled from 'styled-components'

//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    width:100%;
    height:7.2em;
    display:flex;
    align-items: center;

    background:var(--white);
    border-radius:0.4em;

    margin-bottom:0.8em;
    padding:1.2em 1.6em;

    box-shadow: 0em 0em 0.5em var(--shadow);

    z-index:10;
    .info{
        width:32.7em;
        display:flex;
        align-items: center;
        img{
            width:4.8em;
            height:4.8em;
            border-radius:0.4em;
        }

        h1{
            font-size:1.7em;
            margin-left:2.4em;
        }
    }

    //Nao mostra esses dados no mobile
    .moreInfo{
        display:none;
    }

    @media( min-width: 900px ) {
        .moreInfo{
        flex:1;
        margin-left:3em;
        display:flex;
        justify-content:space-space-between;
            .column{
                width:50%;
                padding-left: 1em;
            }
        }
    }
`