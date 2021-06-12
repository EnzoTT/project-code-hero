import styled from 'styled-components'

//Estilização utilizando o padrão mobile first
export const Container = styled.div`
    width:100%;
    background:var(--dark-snow);
    .cardContainer{
        cursor:pointer;
    }
    .charactersContainer{
        padding:0em 2.4em;
        margin-top:3.2em;
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

    @media( min-width: 900px ) {
        .charactersContainer{
        padding:0em 11.3em;
        margin-top:6.3em;
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