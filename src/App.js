import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import store from "./store";
import LeftComponents from './components/LeftComponents';
import Header from './components/Header';
import RightComponent from './components/RightComponent';


function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <div className="main">
        <div style={{flex:1}}>
        <LeftComponents/>
        </div>
        <div style={{flex:1}}>
        <RightComponent/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
