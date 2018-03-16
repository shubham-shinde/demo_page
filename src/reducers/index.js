import * as type from "./../type/message";

const initial_state = {
    Root: {
        type : 'folder',
        index: {
            type : 'folder',
            index : {
                type: 'file',
                ext : 'html',
                code : ''
            },
            app : {
                type : 'file',
                ext : 'js',
                code : `const initial_state = {
                    Root: {
                        type : 'folder',
                        index: {
                            type : 'folder',
                            index : {
                                type: 'file',
                                ext : 'html',
                                code : ''
                            },
                            app : {
                                type : 'file',
                                ext : 'js',
                                code : '' 
                            } 
                        },
                        reducer : {
                            type : 'folder',
                            reducer: {
                                type : 'file',
                                ext : 'js',
                                code : ''
                            }
                        }
                    },
                    activePath: [],
                    path: []
                };` 
            } 
        },
        reducer : {
            type : 'folder',
            reducer: {
                type : 'file',
                ext : 'js',
                code : ''
            }
        }
    },
    activePath: [],
    path: []
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case type.ADD_TO_FILEBAR:
        {
            let a = false;
            const newState = Object.assign({}, state);
            const path = newState.path;
            for(var i=0;i<path.length; i++) {
                if(action.payload.equals(path[i])) {
                    a = true;
                    break;
                }
            }
            if (!a) {
                return Object.assign(newState,{path: [...path,action.payload]});  
            } 
            else {
                return Object.assign(newState,{path: path});  ;
            }         
            break;
        }
        case type.REMOVE_FROM_FILEBAR:
        {
            const newState = Object.assign({}, state);
            const path = [...newState.path];
            const newPaths = path.filter(p => !(p.equals(action.payload)));
            let activePath = newState.activePath;
            if (newState.activePath.equals(action.payload)) {
                activePath = [];
            }
            return Object.assign(newState,{ path: newPaths,activePath: activePath });
            break;
        }
        case type.ACTIVATE_EDITING_FILE:
        {
            const newState = Object.assign({},state);
            newState.activePath = action.payload;
            return newState;
            break;
        }

        case type.CHANGING_EDITING_FILE:
        {
            const newState = Object.assign({}, state);
            const pathCopy = newState.activePath;
            let objCopy = newState;
            for(var i=0; i<pathCopy.length; i++) {
                objCopy = objCopy[pathCopy[i]];
            }
            objCopy.code = action.payload;
            console.log(action.payload);
            return newState;
            break;
        }

        case type.ADD_NEW_FILE_OR_FOLDER:
        {
            const newState = Object.assign({},state);
            let obj = newState;
            const path = action.payload;
            for(var i=0; i<path.length; i++) {
                obj = obj[path[i]];
            }
            obj["input"] = '';
            return newState;
            break;
        }

        case type.ADD_NEW_FILE_OR_FOLDER_INPUT:
        {
            const newState = Object.assign({}, state);
            let reqObj = newState;
            const path = action.payload;
            for(var i=0; i<path.length; i++) {
                reqObj = reqObj[path[i]];
            }
            reqObj["input"] = action.value
            return newState;
            break;
        }

        case type.ADD_NEW_FILE_OR_FOLDER_INPUT_SAVE:
        {
            const newState = Object.assign({}, state);
            let reqObj = newState;
            const path = action.payload;
            for(var i=0; i<path.length; i++) {
                reqObj = reqObj[path[i]];
            }
            const value = reqObj['input'];
            if(action.folder) {
                const folder = {
                    type: 'folder'
                };
                reqObj[value] = folder;
            }
            if(!action.folder) {
                const ext = value.split('.');
                const file = {
                    type : 'file',
                    ext : ext[ext.length-1],
                    code : ''
                }
                reqObj[ext[0]] = file;
            }
            delete reqObj.input;
            return newState;
            break;
        }

        case type.REMOVE_FILE_OR_FOLDER:
        {
            const newState = Object.assign({}, state);
            let a = newState;
            let b;
            const path = action.payload;
            for(var i=0; i<path.length; i++) {
                b = a;
                a = a[path[i]];
            }
            console.log(a);
            if (a.type === "file") {
                const fileBarPaths = [...newState.path];
                const newPaths = fileBarPaths.filter(p => !(p.equals(path)));
                if (newState.activePath.equals(path)) {
                    newState.activePath = [];
                }
                newState.path = newPaths;
            }
            if (path[path.length-1] != 'Root') {
                delete b[path[path.length-1]];
            }
            return newState;
            break; 
        }

        default:
            return state;
            break;
    }
}