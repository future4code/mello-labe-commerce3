import React from "react";
import styled from "styled-components";
import Filtro from "../filtro/Filtro";



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

  render() {
    return (
        <ItemProduto>
            <img src={this.props.imagemProduto} />
            <p>{this.props.nomeProduto}</p>
            <p>{this.props.valorProduto}</p>
            <Botao>Adicionar ao carrinho</Botao>
        </ItemProduto>
    );
  }
}
export default Produtos;