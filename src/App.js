import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './components/Home.js';
import About from './components/About.js';

const App = () => (
    <BrowserRouter>
        <div>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/friends'>Friends</Link></li>
            </ul>

            <hr/>

            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/friends' component={Friends}/>
        </div>
    </BrowserRouter>
)


const Friends = () => (
    <div>
        <h2>Friends</h2>
        <p>ここにフレンズのリストを書きます</p>
    </div>
)

export default App;
