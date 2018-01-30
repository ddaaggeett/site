import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Main from './Main'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Music from './Music'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Main}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/music" component={Music}/>
        </div>
    );
  }
}
