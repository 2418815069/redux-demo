import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { createStore } from 'redux';
import {Provider} from "react-redux";
import styled from 'styled-components';
import RouterIndex from './router/index';
import MinHeader from './view/min-header';
import reducers from './reducers/index';

const store = createStore(reducers);
const Constainer = styled.div`
     width: 100%;
    /* background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center; */
    .main{
      padding: 0 50px;
    }
`;
const App = ()=> {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <Constainer>
    <MinHeader>
    </MinHeader>
      <div className="main">
        <RouterIndex />
      </div>
      </Constainer>
    </BrowserRouter>
    </Provider>
  );
}
export default App;

