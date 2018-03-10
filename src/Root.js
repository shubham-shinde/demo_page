import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import {Router} from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './container/App';

const history = createHistory();

class Root extends Component {
  render() {
    return (  
      <Router history={history}>    
        <App />
      </Router>
    );
  }
}

// App.propTypes = {
//   story: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// }

export default connect(state => state)(Root);
