import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './../actions/actions';

class App extends React.Component{
    render() {
        console.log(this.props);
        return(
            <div>
                <h1 onClick={() => this.props.toggleAction()}>{this.props.title}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title : state.title.title
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

