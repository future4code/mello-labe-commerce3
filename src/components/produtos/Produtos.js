import React from 'react';
import styled from 'styled-components'

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 2fr); 
    grid-column-gap: 1vw;
    grid-row-gap: 1vh;
    justify-items: center;
    align-items: center;
`

const ItemProduto = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 5px;
`

const Botao = styled.button`
    font-size: 14px;
    &:hover {
        background-color: blue;
        color: white;
    }
`

class Produtos extends React.Component {
    state = {
        produtos: [
            { 
                id: 1, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200", 
            },
            
            {
                id: 2, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },

            {
                id: 3, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },

            {
                id: 4, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },

            {
                id: 5, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },

            {
                id: 6, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },

            {
                id: 7, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },

            {
                id: 8, 
                name: "Foguete da Missão Apollo 11", 
                value: 10000.0, 
                imageUrl: "https://picsum.photos/200/200",
            },
        ]
    }

    render () {
        const listaProdutos = this.state.produtos.map(produto => {
            return <ItemProduto>
                        <img src={produto.imageUrl} />
                        <p>{produto.name}</p>
                        <p>{produto.value}</p>
                        <Botao>Adicionar ao carrinho</Botao>
                </ItemProduto>
        })

        return (
            <ContainerProdutos>
                {listaProdutos}
            </ContainerProdutos>
        )
    }
}

export default Produtos