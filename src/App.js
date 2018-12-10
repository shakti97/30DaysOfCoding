import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch ,Route } from 'react-router';
// import AfterFRparent from './ForwardingRefs/afterFRparent';
// import Container from './StickyReact/container';
import Dialog from './MaterilizeCss/dialog';
// import {NavLink} from 'react-router-dom';
// import BeforeHOCComponenet1 from "./Components/BeforeHOCComponent1";
// import BeforeHOCComponenet2 from "./Components/BeforeHOCComponent2";
// import styled from 'styled-components';
// import Component1throughHOC from './Components/AfterHOCComponent1';
// import Component2throughHOC from  './Components/AfterHOCComponent2';
// import Component1 from './Loader/Component1';
// import Component2 from './Loader/Component2';
// import Spinner from './Loader/loader';
// import beforeFRefs from './ForwardingRefs/beforeFRefs';
// import beforeFRparent from './ForwardingRefs/beforeFRparent';


// const UnList= styled.ul`
//     border : 0.2em solid red
//     text-align : center
// `;
// const Ilist=styled.li`
//     list-style : none
//     margin-right : 4.0em
//     display : inline
//     border : 0.2em solid blue
// `;
// const Linked=styled(NavLink)`
//     margin : 4.0em 
//     color : blue
     
// `
// const StyleLink=styled.div`
//   text-align : center
// `

class App extends Component {
  render() {
    return (
      <div >
        {/* <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        </div> */}
        <div>

        </div>
          {/* <StyleLink>
            <Linked to="/Component1">Component1</Linked>
            <Linked to="/Component2">Component2</Linked>
            <Linked to='/Component1AfterHOC'>Component1AfterHOC</Linked>
            <Linked to='/Component2AfterHOC'>Component2AfterHOC</Linked>
            </StyleLink>
          */}
          <Switch>
            {/* <Route exact path="/" component={BeforeHOCComponenet1}/>
            <Route path="/Component1" component={BeforeHOCComponenet1}/>
            <Route path="/Component2" component={BeforeHOCComponenet2}/>
            <Route path="/Component1AfterHOC" component={Component1throughHOC}/>
            <Route path="/Component2AfterHoc" component={Component2throughHOC}/> */}
            {/* <Route path='/Component1' exact component={Component1}/>
            <Route path='/Component2' exact component={Component2}/>
            <Route path='/' exact component={Component2}/>
            <Route path='/Loader' exact component={Spinner}/> */}
            {/* <Route path='/' exact component={beforeFRefs}/> */}
            {/* <Route path='/' exact component={beforeFRparent}/> */}
            {/* <Route path='/' exact component={Container}/> */}
            <Route path='/' exact component={Dialog}/>
          </Switch>
         
      </div>
    );
  }
}

export default App;
