import React from "react";
import styled from "styled-components";

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
            <img src={this.props.imagemProduto} alt="foto produto"/>
            <p>{this.props.nomeProduto}</p>
            <p>R$ {this.props.valorProduto}</p>
            <Botao>Adicionar ao carrinho</Botao>
        </ItemProduto>
    );
  }
}
export default Produtos;