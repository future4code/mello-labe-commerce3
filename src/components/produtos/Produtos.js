import React from "react";

class Produtos extends React.Component {

  render() {
    return (
        <div>
            <img src={this.props.imagemProduto} alt="foto produto"/>
            <p>{this.props.nomeProduto}</p>
            <p>R$ {this.props.valorProduto}</p>
        </div>
    );
  }
}
export default Produtos;