import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Test from './Test';

const StyledTest = styled(Test)`
  background: red;
  height: 100px;
  width: 100px;
`;

class App extends Component {
  render() {
    return (
      <StyledTest />
    );
  }
}

export default App;
