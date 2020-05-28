import React from 'react';
import './App.css';
import Filtro from './components/filtro/Filtro.js';
import Produtos from './components/produtos/Produtos.js';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
`

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 2fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  justify-items: center;
  align-items: center;
`

const produtos = [{
    id: 1,
    name: "Item A",
    value: 100.0,
    imageUrl: "https://picsum.photos/200/200?a=1",
  },

  {
    id: 2,
    name: "Item B",
    value: 95.0,
    imageUrl: "https://picsum.photos/200/200?a=2",
  },

  {
    id: 3,
    name: "Foguete da Missão Apollo 11",
    value: 45.0,
    imageUrl: "https://picsum.photos/200/200?a=3",
  },

  {
    id: 4,
    name: "Foguete da Missão Apollo 11",
    value: 250.0,
    imageUrl: "https://picsum.photos/200/200?a=4",
  },

  {
    id: 5,
    name: "Foguete da Missão Apollo 11",
    value: 300.0,
    imageUrl: "https://picsum.photos/200/200?a=5",
  },

  {
    id: 6,
    name: "Foguete da Missão Apollo 11",
    value: 50.0,
    imageUrl: "https://picsum.photos/200/200?a=6",
  },

  {
    id: 7,
    name: "Foguete da Missão Apollo 11",
    value: 20.0,
    imageUrl: "https://picsum.photos/200/200?a=7",
  },

  {
    id: 8,
    name: "Foguete da Missão Apollo 11",
    value: 68.0,
    imageUrl: "https://picsum.photos/200/200?a=8",
  }]


class App extends React.Component {

    state = {
        produtos: produtos,
        ordenacao: "crescente",
        valorMaximo: Infinity,
        valorMinimo: 0,
        buscarProduto: "",
        carrinho: []
    }

    alteraOrdenacao = (event) => {
        this.setState({ ordenacao: event.target.value });
    };

    onChangeValorMinimo = (event) => {
        this.setState({ valorMinimo: Number(event.target.value) });
    };
    
    onChangeValorMaximo = (event) => {
        this.setState({ valorMaximo: Number(event.target.value) })
    
    };

    onChangeBusca = (event) => {
        this.setState({ buscarProduto: event.target.value })
    }
    
    filtraProdutos = () => {
        let produtosFiltrados = this.state.produtos;
        if (this.state.valorMinimo) {
            produtosFiltrados = produtosFiltrados.filter(produto => {
               return produto.value >= this.state.valorMinimo;
            })
        }
        if (this.state.valorMaximo) {
            produtosFiltrados = produtosFiltrados.filter(produto => {
               return produto.value <= this.state.valorMaximo;
            })
        }
        if (this.state.buscarProduto !== "") {
            produtosFiltrados = produtosFiltrados.filter(produto => {
                return produto.name.includes(this.state.buscarProduto)
            })
        }
        return produtosFiltrados
    }    
    
    
    render() {
        const listaOrdenada = this.filtraProdutos().sort((a, b) => {
            if (this.state.ordenacao === "crescente") {
                return a.value - b.value;
            } else if (this.state.ordenacao === "decrescente") {
                return b.value - a.value;
            }
        });

        const listaProdutos = listaOrdenada.map(produto => {
            return <Produtos 
                        key={produto.id}
                        imagemProduto={produto.imageUrl}
                        nomeProduto={produto.name}
                        valorProduto={produto.value}
                    />
        });
        return (
            <Container>
                <Filtro
                    filtrarMin={this.onChangeValorMinimo}
                    filtrarMax={this.onChangeValorMaximo}
                    buscarProduto={this.onChangeBusca}
                    />
                <div>
                    <p>Quantidade de Produtos : {listaProdutos.length}</p>
                    <select
                        value={this.state.ordenacao}
                        onChange={this.alteraOrdenacao}
                    >
                        <option value="crescente"> Preço: Crescente </option>
                        <option value="decrescente"> Preço: Decrescente </option>
                    </select>
                    <ContainerProdutos> {listaProdutos} </ContainerProdutos>    
                </div>    
            </Container>
        )
    }

}

export default App;
