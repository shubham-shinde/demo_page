import React from 'react';
import '../../style/component/Showfile/Showfile.scss';
import {connect} from 'react-redux';
import { add_to_filebar , add_new_file_or_folder , add_new_file_or_folder_input, add_new_file_or_folder_input_save, remove_file_or_folder} from './../../actions/actions'; 

class Showfile extends React.Component{
    constructor(props) {
        super(props);
        this.folder = this.folder.bind(this);
    }

    folder(folder, fileName, path) {
        const arr = [];
        if(folder.type == "folder") {
            const fileArr = []
            for(var prop in folder) {
                if (prop != 'type' && prop !='input') {
                    fileArr.push(
                        <ul>
                            {this.folder(folder[prop], prop, [...path,prop])}
                        </ul>
                    );
                }
                if (prop == 'input') {
                    fileArr.push(
                        <div>
                            <input type='text' value={folder[prop]} onChange = {(e) => this.props.dispatch(add_new_file_or_folder_input(path,e.target.value))} style = {{width:"30%"}}/>
                            <button onClick={() => this.props.dispatch(add_new_file_or_folder_input_save(path, false))}>file</button>
                            <button onClick={() => this.props.dispatch(add_new_file_or_folder_input_save(path, true))}>folder</button>
                        </div>
                    )
                }
            }
            arr.push(
                <div>
                    <div>{fileName}<button onClick = {() => this.props.dispatch(add_new_file_or_folder(path))}>Add</button><button onClick = {() => this.props.dispatch(remove_file_or_folder(path))}>R</button></div>
                    {fileArr}
                </div>
            );
        }
        if(folder.type == "file") {
            arr.push(<li><spam  onClick = {() => this.props.dispatch(add_to_filebar(path))}>{fileName+'.'+folder.ext}</spam><button onClick = {() => this.props.dispatch(remove_file_or_folder(path))}>R</button></li>);
        }
        return arr;
    }

    render() {
        const folder= this.props.updateReducer;
        return (
            <div>
                {this.folder(folder.Root, [Object.keys(folder)[0]], [Object.keys(folder)[0]])}
            </div>
        );
    }
}

export default connect(state => state)(Showfile);