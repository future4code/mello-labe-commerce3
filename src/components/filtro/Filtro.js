import React from "react";
import styled from "styled-components";
import Produtos from "../produtos/Produtos";
import App from "../../App";

const Container = styled.div`
  margin: 1vw;
  padding-left: 2vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 18vw;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 1vh;
`;

function Filtro(props) {

    const produtosFiltrados = props.listaProdutos.filter(produto => {
        if(produto.value >= props.filtrarMin) {
            return true
        } else {
            return false
        }
        }).filter(produto => {
            if(produto.value <= props.filtrarMax) {
                return true
            } else {
                return  false
            }
        }) 
        
    return (
        <div>
            <Container>
              <h2>Filtros:</h2>
                <label>Valor Mínimo</label>
                <Input
                  type="number"
                  onChange={props.filtrarMin}
                />
            
                <label>Valor Máximo</label>
                <Input
                  type="number"
                  onChange={props.filtrarMax}
                />
            
                <label>Buscar Produto</label>
                <Input type="text" />
            </Container>
            {produtosFiltrados.map(produto => {
            
                return <div>{produto}</div>
                
            })}
        </div>
        
    );
}

export default Filtro;
