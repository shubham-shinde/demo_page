import { UPDATE_CODE ,ADD_NEW_FILE_OR_FOLDER, ADD_NEW_FILE_OR_FOLDER_INPUT, ADD_NEW_FILE_OR_FOLDER_INPUT_SAVE, REMOVE_FILE_OR_FOLDER, ACTIVATE_EDITING_FILE, CHANGING_EDITING_FILE} from "./../type/message";

const initial_state = {
    Root: {
        type : 'folder',
    },
    path: []
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case UPDATE_CODE:
        {
            return {code: action.payload };          
            break;
        }
        case ACTIVATE_EDITING_FILE:
        {
            const newPath = Object.assign({},state);
            newPath.path = action.payload;
            return newPath;
            break;
        }
        case CHANGING_EDITING_FILE:
        {
            const stateCopy = Object.assign({}, state);
            const pathCopy = stateCopy.path;
            let objCopy = stateCopy;
            for(var i=0; i<pathCopy.length; i++) {
                objCopy = objCopy[pathCopy[i]];
            }
            objCopy.code = action.payload;
            return stateCopy;
            break;
        }
        case ADD_NEW_FILE_OR_FOLDER:
        {
            const newState = Object.assign({},state);
            let obj = newState;
            const path = action.payload;
            console.log(path);
            console.log(obj);
            for(var i=0; i<path.length; i++) {
                obj = obj[path[i]];
                console.log(obj);
            }
            obj["input"] = '';
            return newState;
            break;
        }
        case ADD_NEW_FILE_OR_FOLDER_INPUT:
        {
            const newState = Object.assign({}, state);
            let arr = newState;
            const pat = action.payload;
            for(var i=0; i<pat.length; i++) {
                arr = arr[pat[i]];
            }
            arr["input"] = action.value
            return newState;
            break;
        }
        case ADD_NEW_FILE_OR_FOLDER_INPUT_SAVE:
        {
            const newSta = Object.assign({}, state);
            let ar = newSta;
            const road = action.payload;
            for(var i=0; i<road.length; i++) {
                ar = ar[road[i]];
            }
            const value = ar['input'];
            console.log(value);
            if(action.folder) {
                const folder = {
                    type: 'folder'
                };
                ar[value] = folder;
            }
            if(!action.folder) {
                const ext = value.split('.');
                const file = {
                    type : 'file',
                    ext : ext[ext.length-1],
                    code : ''
                }
                ar[ext[0]] = file;
            }
            delete ar.input;
            return newSta;
            break;
        }
        case REMOVE_FILE_OR_FOLDER:
        {
            const newSt = Object.assign({}, initial_state);
            let a = newSt;
            let b;
            const roa = action.payload;
            for(var i=0; i<roa.length; i++) {
                b = a;
                a = a[roa[i]];
            }
            if (roa[roa.length-1] != 'Root') {
                delete b[roa[roa.length-1]];
            }
            console.log(b);
            return newSt;
            break; 
        }          
            


        default:
            return state;
            break;
    }
}