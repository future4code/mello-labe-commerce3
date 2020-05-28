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
    name: "Foguete da Missão Apollo 11",
    value: 100.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 2,
    name: "Foguete da Missão Apollo 11",
    value: 95.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 3,
    name: "Foguete da Missão Apollo 11",
    value: 45.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 4,
    name: "Foguete da Missão Apollo 11",
    value: 250.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 5,
    name: "Foguete da Missão Apollo 11",
    value: 300.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 6,
    name: "Foguete da Missão Apollo 11",
    value: 50.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 7,
    name: "Foguete da Missão Apollo 11",
    value: 20.0,
    imageUrl: "https://picsum.photos/200/200/",
  },

  {
    id: 8,
    name: "Foguete da Missão Apollo 11",
    value: 68.0,
    imageUrl: "https://picsum.photos/200/200",
  },]


class App extends React.Component {

    state = {
        produtos: produtos,
        ordenacao: "crescente",
        ValorMaximo: 0,
        ValorMinimo: 0,
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
    
    
    render() {
        const listaOrdenada = this.state.produtos.sort((a, b) => {
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
                    listaProdutos={this.state.produtos}
                    filtrarMin={this.onChangeValorMinimo}
                    filtrarMax={this.onChangeValorMaximo}
                    
                    />
                <div>
                    <p>Quantidade de Produtos : {this.state.produtos.length}</p>
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
