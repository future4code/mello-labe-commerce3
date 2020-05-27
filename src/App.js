import React from "react";
import "./App.css";
import Filtro from "./components/filtro/Filtro.js";
import Produtos from "./components/produtos/Produtos.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Filtro /* lista={produtos} min={1} max={20} */ />
      {/*  <Filtro  lista={item}  /> */}
      <Produtos />
    </Container>
  );
}

export default App;
