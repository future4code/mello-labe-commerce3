import React from 'react';
import './App.css';
import Filtro from './components/filtro/Filtro.js';
import Produtos from './components/produtos/Produtos.js';
import Carrinho from './components/carrinho/Carrinho.js';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
`
const Header = styled.div `
    display: flex;
    justify-content: space-between;
`
const Select = styled.select`
    height: 70%;
    margin-top: 3vh;
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
const Produto = styled.div`
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
`;

const CarrinhoCompras = styled.div`
    margin: 1vw;
  padding-left: 2vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 15vw;
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
    name: "Item C",
    value: 45.0,
    imageUrl: "https://picsum.photos/200/200?a=3",
  },

  {
    id: 4,
    name: "Item D",
    value: 250.0,
    imageUrl: "https://picsum.photos/200/200?a=4",
  },

  {
    id: 5,
    name: "Item E",
    value: 300.0,
    imageUrl: "https://picsum.photos/200/200?a=5",
  },

  {
    id: 6,
    name: "Item F",
    value: 50.0,
    imageUrl: "https://picsum.photos/200/200?a=6",
  },

  {
    id: 7,
    name: "Item G",
    value: 20.0,
    imageUrl: "https://picsum.photos/200/200?a=7",
  },

  {
    id: 8,
    name: "Item H",
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
        carrinho: [],
        adicionado: false,
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
    };
    
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
    }; 
    

    adicionarProduto = (id) => {
        let novoCarrinho = this.state.carrinho
        // produtoExiste recebe o index de cada produto do carrinho   
        const produtoExiste = novoCarrinho.findIndex(produto => produto.id === id) 
    
        // metodo findIndex retorna -1 caso não encontre produto no array novoCarrinho
        if (produtoExiste === -1) {
            const produto = this.state.produtos.find(item => item.id === id)
           
            const produtoAdicionado = {
                id: produto.id,
                nome: produto.name,
                valor: produto.value,
                quantidade: 1
            }
            novoCarrinho.push(produtoAdicionado)
        } else {
            const qtde = novoCarrinho[produtoExiste].quantidade
            novoCarrinho[produtoExiste] = {
                ...novoCarrinho[produtoExiste], 
                quantidade: qtde + 1
            }
        }

        this.setState({ carrinho: novoCarrinho })
    }

    excluirProduto = (id) => {
        const excluirDoCarrinho = this.state.carrinho.filter(produto => {
            return produto.id !== id
        })

        this.setState({carrinho: excluirDoCarrinho})
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
            return <Produto>
                        <Produtos 
                            key={produto.id}
                            imagemProduto={produto.imageUrl}
                            nomeProduto={produto.name}
                            valorProduto={produto.value}
                    />
                        <Botao                            
                            onClick={() => {this.adicionarProduto(produto.id)}}>
                            Adicionar ao carrinho</Botao>
                    </Produto>
        });
        
        const listaCarrinho = this.state.carrinho.map(produtoNoCarrinho => {
            return <Carrinho
                      nomeProduto={produtoNoCarrinho.nome}
                      valorProduto={produtoNoCarrinho.valor}
                      quantidade={produtoNoCarrinho.quantidade}
                      excluir={()=>this.excluirProduto(produtoNoCarrinho.id)}
                    />       
        })

        return (
            <Container>
                <Filtro
                    filtrarMin={this.onChangeValorMinimo}
                    filtrarMax={this.onChangeValorMaximo}
                    buscarProduto={this.onChangeBusca}
                    />
                <div>
                    <Header>
                        <p>Quantidade de Produtos : {listaProdutos.length}</p>
                        <Select
                            value={this.state.ordenacao}
                            onChange={this.alteraOrdenacao}
                        >
                            <option value="crescente"> Preço: Crescente </option>
                            <option value="decrescente"> Preço: Decrescente </option>
                        </Select>
                    </Header> 
                    <ContainerProdutos> {listaProdutos} </ContainerProdutos>    
                </div> 
                <CarrinhoCompras>    
                    <h2>Carrinho</h2>
                    {listaCarrinho}
                    <p>Total: {this.state.carrinho.reduce((acumulador, objeto) => acumulador + (objeto.quantidade * objeto.valor), 0)}</p>    
                </CarrinhoCompras>    
            </Container>
        )
    }
}

export default App;
