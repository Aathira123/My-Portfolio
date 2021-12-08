import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills'
import Certification from './components/certification';
import Hobbies from './components/Hobbies';

import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
function App({location}) {
 
  return (
    <div className="App" >
     
    
    <NavBar/> 
    <TransitionGroup>
      <CSSTransition classNames='page' timeout={300} key={location.key}>
      <Switch location={location}>
    <Route path="/home" component={Home} />
    <Route path="/skills" component={Skills} />
    <Route path="/hobbies" component={Hobbies} />
    <Route path="/certification" component={Certification} />
   
    <Redirect to="/home"></Redirect>
    </Switch>
    </CSSTransition>
 </TransitionGroup>
   
    </div>
  );
}

export default withRouter(App);
