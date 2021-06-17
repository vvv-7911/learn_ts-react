import React from 'react';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";

import routes from "@/router"
import { Provider } from "react-redux";
import store from "./store";

import YAppHeader from './components/app-header'
import YAppFooter from './components/app-footer' 

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YAppHeader/>
        { renderRoutes(routes)}
        <YAppFooter/>
      </HashRouter>
    </Provider>
    
  );
}

export default App;
