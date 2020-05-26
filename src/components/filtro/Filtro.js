import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin: 1vw;
    padding-left: 2vw;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 97vh;
    width: 18vw;
`

const Input = styled.input `
    display: block;
    margin-bottom: 1vh;
`

class Filtro extends React.Component {
    state = {
        valorMinimo: "",
        valorMaximo: "",
        buscarProduto: "",
    }

    render() {
        return (
            <Container>
                <h2>Filtros:</h2>
                <form>
                    <label for="minimo">Valor Mínimo</label>
                    <Input id="minimo" type="number"/>

                    <label for="maximo">Valor Máximo</label>
                    <Input id="maximo" type="number"/>

                    <label for="busca">Buscar Produto</label>
                    <Input id="busca" type="text"/>
                </form>
            </Container>
            )
    }

}

export default Filtro

