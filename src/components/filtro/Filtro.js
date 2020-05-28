import React from "react";
import styled from "styled-components";


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
        
    return (
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
    );
}

export default Filtro;
