import React from 'react';
import styled from 'styled-components';

const ListaProdutos = styled.p`
    list-style: none;
`

const BotaoExcluir = styled.button`
    margin-left: 5px;
    font-size: 14px;
  &:hover {
    background-color: blue;
    color: white;
    }
`

class Carrinho extends React.Component {
    render () {
        return (
            <div>
                <ListaProdutos>
                    {this.props.quantidade}x {this.props.nomeProduto}: {this.props.valorProduto * this.props.quantidade} 
                    <BotaoExcluir onClick={this.props.excluir}>x</BotaoExcluir>
                </ListaProdutos>
            </div>
        )
    }
}

export default Carrinho