import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Content} from "./Content/Content";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Nav/>
              <Content />
          </div>
      </BrowserRouter>
  );
}

export default App;
