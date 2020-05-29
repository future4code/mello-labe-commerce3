import React from 'react';

class Carrinho extends React.Component {
    render () {
        return (
            <div>
            
        <ul><li>{this.props.quantidade} {this.props.nomeProduto} {this.props.valorProduto * this.props.quantidade}</li></ul>
               
            </div>
        )
    }
}

export default Carrinho