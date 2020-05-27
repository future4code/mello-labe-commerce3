import React from "react";
import styled from "styled-components";
import Filtro from "../filtro/Filtro";

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 2fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  justify-items: center;
  align-items: center;
`;

const ItemProduto = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
`;

const Botao = styled.button`
  font-size: 14px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

class Produtos extends React.Component {
  state = {
    produtos: [
      {
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
      },
    ],

    filtroSelecionado: "crescente",
  };

  alteraFiltro = (event) => {
    this.setState({ filtroSelecionado: event.target.value });
  };

  render() {
    const listaOrdenada = this.state.produtos.sort((a, b) => {
      if (this.state.filtroSelecionado === "crescente") {
        return a.value - b.value;
      } else if (this.state.filtroSelecionado === "decrescente") {
        return b.value - a.value;
      }
    });

    const listaProdutos = listaOrdenada.map((produto) => {
      return (
        <ItemProduto>
          <img src={produto.imageUrl} />
          <p>{produto.name}</p>
          <p>{produto.value}</p>
          <Botao>Adicionar ao carrinho</Botao>
        </ItemProduto>
      );
    });

    console.log(listaProdutos);
    return (
      <div>
        <p>Quantidade de Produtos : {this.state.produtos.length}</p>
        <select
          value={this.state.filtroSelecionado}
          onChange={this.alteraFiltro}
        >
          <option value="crescente"> Preço: Crescente </option>
          <option value="decrescente"> Preço: Decrescente </option>
        </select>

        <ContainerProdutos>{listaProdutos}</ContainerProdutos>
      </div>
    );
  }
}

export default Produtos;
