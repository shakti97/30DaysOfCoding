import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch ,Route } from 'react-router';
import {Link} from 'react-router-dom';
import BeforeHOCComponenet1 from "./Components/BeforeHOCComponent1";
import BeforeHOCComponenet2 from "./Components/BeforeHOCComponent2";
import styled from 'styled-components';


const UnList= styled.ul`
    border : 0.2em solid red
    text-align : center
`;
const Ilist=styled.li`
    list-style : none
    margin-right : 4.0em
    display : inline
    border : 0.2em solid blue
`;
const Linked=styled(Link)`
    margin : 4.0em 
    color : blue
     
`
const StyleLink=styled.div`
  text-align : center
`
class App extends Component {
  render() {
    return (
      <div >
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        </div>
        <body>
          <StyleLink>
            <Linked to="/Component1">Component1</Linked>
            <Linked to="/Component2">Component2</Linked>
            </StyleLink>
          <Switch>
            <Route exact path="/" component={BeforeHOCComponenet1}/>
            <Route path="/Component1" component={BeforeHOCComponenet1}/>
            <Route path="/Component2" component={BeforeHOCComponenet2}/>
          </Switch>
        </body>
      </div>
    );
  }
}

export default App;
