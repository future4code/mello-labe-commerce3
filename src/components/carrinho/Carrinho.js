import React from 'react';

class Carrinho extends React.Component {
    render () {
        return (
            <div>
                <h2>Carrinho</h2>
                <ul><li>{this.props.nomeProduto}{this.props.valorProduto}</li></ul>
                <p>Total:</p>
            </div>
        )
    }
}

export default Carrinho