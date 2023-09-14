import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills'
import Certification from './components/Certification';
import Hobbies from './components/Hobbies';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import ProjectsComponent from "./components/ProjectsComponent";
import Experience  from './components/Experience';
function App({location}) {
 
  return (
    <div className="App" >
     
    
    <NavBar/> 
    <TransitionGroup>
    <CSSTransition classNames='page' timeout={300} key={location.key}>
    <Switch location={location}>
    <Route path="/about" component={Home} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={ProjectsComponent}/>
    <Route path="/hobbies" component={Hobbies} />
    <Route path="/experience" component={Experience}/>
    <Route path="/certification" component={Certification} />
   
    <Redirect to="/about"></Redirect>
    </Switch>
    </CSSTransition>
 </TransitionGroup>
   
    </div>
  );
}

export default withRouter(App);
