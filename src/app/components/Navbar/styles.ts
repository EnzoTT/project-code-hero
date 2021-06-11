import styled from 'styled-components'

//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    width:100%;
    height:6.4em;
    background:var(--white);

    display:flex;
    align-items:center;
    justify-content:space-between;

    margin-bottom:2.4em;

    .logo{
        padding:2.4em;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:9.6em;
            height:2.4em;
            max-width: 100%;
        }
    }
    .userInfo{
        display:flex;
        .text{
            font-size:1.2em;
             display:flex;
             flex-direction:column;
             .name{
                 font-weight: bold;
             }
        }
        .lettersContainer{
            width:3.2em;
            height:3.2em;
            border-radius:0.4em;
            background:var(--snow);
           
            display:flex;
            justify-content:center;
            align-items:center;

            margin:0em 2.4em 0em 1.2em;
            h1{
                font-size:1.5em;
            }
        }
    }
    //Estilo para o browser
    @media( min-width: 900px ) {
    margin-bottom:4em;
    .userInfo{
       .text{
        font-size:1.4em;
        display:flex;
        flex-direction:row;
        align-items:center;
        .name{
            font-weight: bold;
            margin-right:0.2em;
        }
       }
    }
    }
`