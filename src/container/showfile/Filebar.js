import React from 'react';
import "./../../style/component/Showfile/Filebar.scss";
import { remove_from_filebar, activate_editing_file } from './../../actions/actions';
import { connect } from 'react-redux';

class Filebar extends React.Component{
    contentOfFilebar(data, index) {
        return (
            <li key={index}>
                <a>
                    <span onClick={() => this.self.props.dispatch(activate_editing_file(data))}>{data[data.length-1]}</span>
                    <span onClick={() => {this.self.props.dispatch(this.remove_from_filebar(data))}}>   *</span>
                </a>
            </li>
        );
    }
    
    render() {
        const arr = this.props.filebarReducer;
        return(
            <ul id = "file_bar">
                {arr.map(this.contentOfFilebar,{ self: this,remove_from_filebar})}
            </ul>
        );
    }
}

export default connect(state => state)(Filebar);