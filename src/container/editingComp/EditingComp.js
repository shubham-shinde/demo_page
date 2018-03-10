import React from 'react';
import "./../../style/component/editingComp/EditingComp.scss";
import { connect } from 'react-redux';
import { update_code , changing_editing_file } from './../../actions/actions';

class EditingComp extends React.Component{
    render() {
        const state = this.props.updateReducer;
        console.log(state);
        const path = state.path;
        let obj = state;
        for(var i=0; i<path.length; i++) {
            obj = obj[path[i]];
        }
        return(
            <div id="editing_comp">
                <textarea 
                    value={obj.code}
                    onChange={(e) => this.props.dispatch(changing_editing_file(e.target.value))}
                />
            </div>
        );
    }
}

export default connect(state => state)(EditingComp);