import React from 'react';
import Prism from 'prismjs';
import "./../../style/component/editingComp/EditingComp.scss";
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import { update_code , changing_editing_file } from './../../actions/actions';

class EditingComp extends React.Component{
    render() {
        const state = this.props.updateReducer;
        const path = state.activePath;
        let obj = state;
        for(var i=0; i<path.length; i++) {
            obj = obj[path[i]];
        }
        // var code = obj.code;
        // var html = Prism.highlight(code, Prism.languages.javascript);
        return(
            <div id="editing_comp">
                <AceEditor
                    mode="javascript"
                    theme="github"
                    name="UNIQUE_ID_OF_DIV"
                    value= {obj.code}
                    onChange = {(value) => this.props.dispatch(changing_editing_file(value))}
                    editorProps={{
                        $blockScrolling: true
                    }}
                    style = {{fontSize: "16px"}}
                />
            </div>
        );
    }
}


export default connect(state => state)(EditingComp);