import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Container, ArrowLeft, ArrowRight, Button, DoubleArrowLeft, DoubleArrowRight } from './styles'

import Card from '../Card'
import Header from '../Header'

import api from '../../../services/api'

//Conteudo da home 
const Content = () => {
    //Variavel para rota
    let history = useHistory();
    //Array de dados do personagem
    const [characters, setCharacters] = useState<any>([]);
    //Popula os botoes de paginacao
    const [pagesArray, setPagesArray] = useState<any>([]);
    //States de paginação
    const [currentPage, setCurrentPage] = useState<any>(1);
    //Controle de paginacao
    const [pageLimit] = useState<any>(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<any>(0);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<any>(5);
    const [finalPage, setFinalPage] = useState<any>(0);
    const [total, setTotal] = useState<any>(0);

    //Controle de busca
    const [name, setName] = useState<any>("")
    const [search, setSearch] = useState<any>(false)

    //Chamadas da api
    useEffect(() => {
        if (name === '') {
            api
                .get(
                    `/characters?limit=10&&offset=${10 * (currentPage - 1)}`
                ).then((res) => {
                    setCharacters(res.data.data.results);
                    
                    setTotal(res.data.data.total)
                    setFinalPage((Math.ceil(res.data.data.total / 10)))
                    handlePagination(Math.ceil(res.data.data.total / 10))
                })
        } else {
            api
                .get(
                    `/characters?nameStartsWith=${name}&&limit=10&&offset=${10 * (currentPage - 1)}`
                ).then((res) => {
                    setCharacters(res.data.data.results);

                    setTotal(res.data.data.total)
                    setFinalPage((Math.ceil(res.data.data.total / 10)))
                    handlePagination(Math.ceil(res.data.data.total / 10))
                })
        }
    }, [currentPage, search])

    //Funcoes de Busca
    function handleName(e: any) {
        setName(e);
    }
    function handleSearch() {
        setSearch(!search);
        setCurrentPage(1);
    }

    //Funcoes Paginacao
    //Popula o array dos botoes
    function handlePagination(e: any) {
        let pagesArray: any = [];
        for (let i = 1; i <= e; i++) {
            pagesArray.push(i)
        }
        setPagesArray(pagesArray);
    }
    //Muda para a pagina clicada
    function handlePage(e: any) {
        setCurrentPage(e)

    }
    //Prox pagina
    function handleNextPage() {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageLimit);
        }
    }
    //Pagina anterior
    function handlePrevPage() {
        setCurrentPage(currentPage - 1)

        if (currentPage-1 <= minPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageLimit);
        }
    }
    //Primeira pagina
    function handleFirst() {
        setCurrentPage(1)


        setMaxPageNumberLimit(5);
        setMinPageNumberLimit(0);
    }
    //Ultima pagina
    function handleLast() {
        setCurrentPage(finalPage)
        setMaxPageNumberLimit(finalPage);
        setMinPageNumberLimit(finalPage - 5);
    }
    //Vai para a pagina detalhe de certo presonagem
    function handleDetail(e: any) {
        history.push('/detail', {
            character: e
        })
    }

    return (
        <Container>
            <Header handleSearch={handleSearch} handleName={handleName} />
            {/* Cards  */}
            <div className="charactersContainer">
                <div className="legend">
                    <span className="character">Personagem</span>
                    <div className="moreInfo">
                        <span className="hideText">Série</span>
                        <span className="hideText">Eventos</span>
                    </div>
                </div>
                {
                    characters.map((item: any, index: number) => {

                        return (
                            <div className="cardContainer" onClick={handleDetail.bind(this, item)}>
                                <Card character={item} />
                            </div>
                        )

                    })
                }
            </div>

            {/* Paginacao */}
            <div className="pagination">
                {total > 10 ?
                   ( <>
                        <button className="icon" onClick={handleFirst} disabled={(currentPage <= pagesArray[0]) ? true : false}>
                            <DoubleArrowLeft />
                        </button>
                        <button className="icon" onClick={handlePrevPage} disabled={currentPage === pagesArray[0] ? true : false}>
                            <ArrowLeft />
                        </button>
                        {pagesArray.map((item: any, index: any) => {
                            if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
                                return (
                                    <Button selected={item === currentPage} onClick={handlePage.bind(this, item)}>
                                        <span>{item}</span>
                                    </Button>
                                )
                            } else {
                                return ""
                            }
                        })}
                        <button className="icon" onClick={handleNextPage} disabled={currentPage === pagesArray[pagesArray.length - 1] ? true : false}>
                            <ArrowRight />
                        </button>
                        <button className="icon" onClick={handleLast} disabled={currentPage >= pagesArray[pagesArray.length - 1] ? true : false}>
                            <DoubleArrowRight />
                        </button>
                    </>) : (
                         <Button selected={true} >
                         <span>1</span>
                         </Button>
                    )
                }
            </div>
        </Container>
    )
}

export default Content