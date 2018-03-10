import React from 'react';
import {Route, Link , Switch} from 'react-router-dom';
import Starting from './Starting';
import { connect } from 'react-redux';
//import Showfile from './showfile/Showfile.js';
import './../style/app.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ul id= 'navbar'>
                        <li style = {{fontSize:'2em'}}><a>Editro</a></li>
                        <li><a>Files</a></li>
                        <li><a>Edit</a></li>
                        <li><a>View</a></li>
                        <li><a>Help</a></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path='/' component={Starting} />
                </Switch>
            </div>
        );
    } 
}

export default connect(state => state)(App);