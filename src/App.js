import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch ,Route } from 'react-router';
import {Link} from 'react-router-dom';
import BeforeHOCComponenet1 from "./Components/BeforeHOCComponent1";
import BeforeHOCComponenet2 from "./Components/BeforeHOCComponent2";


const li= styled.li`
    display : "inline"
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <ul>
            <li ><Link to="/Component1">Component1</Link></li>
            <li><Link to="/Component2">Component2</Link></li>
          </ul>
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
