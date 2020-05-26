import React from 'react';
import './App.css';
import Filtro from './components/filtro/Filtro.js';
import Produtos from './components/produtos/Produtos.js';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
`

function App() {
  return (
    <Container>
      <Filtro />
      <Produtos />
    </Container>
  );
}

export default App;
