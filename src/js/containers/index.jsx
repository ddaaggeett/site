import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from '../components/Home'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Music from '../components/Music'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/music" component={Music}/>
        </div>
    );
  }
}
