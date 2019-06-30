import React from 'react';
import {BrowserRouter} from "react-router-dom";
import styled from 'styled-components';
import RouterIndex from './router/index';
import MinHeader from './view/min-header';

const Constainer = styled.div`
     width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
`;
const App = ()=> {
  return (
    <BrowserRouter>
    <Constainer>
    <MinHeader>
      </MinHeader>
      </Constainer>
      <div>
        <RouterIndex></RouterIndex>
      </div>
    
    </BrowserRouter>
  );
}
export default App;

