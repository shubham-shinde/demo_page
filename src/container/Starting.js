import React,{Component} from 'react';
import {connect} from 'react-redux';
import Showfile from './showfile/Showfile';
import Filebar from './showfile/Filebar';
import EditingComp from './editingComp/EditingComp';
import './../style/Starting.scss'

class Starting extends Component {
    render() {
        return (
            <div class = "float_constainer">
              <div class = "left_side">
                 <Showfile />
              </div>
              <div class = "right_side">
                 <Filebar/>
                 <EditingComp/>
              </div>
            </div>
        );
    }
}

export default Starting;