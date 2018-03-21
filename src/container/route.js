import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route} from 'react-router-dom';
import history from './../history';
import App from './app';

class Root extends Component {
  render() {
    return (  
      <Router history={history}>    
        <Switch>
          <Route exact path="/" component={App}/>
        </Switch>
      </Router>
    );
  }
}

// App.propTypes = {
//   story: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// }

export default Root;
