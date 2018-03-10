import { UPDATE_CODE ,ADD_TO_FILEBAR, REMOVE_FROM_FILEBAR, ADD_NEW_FILE_OR_FOLDER , ADD_NEW_FILE_OR_FOLDER_INPUT, ADD_NEW_FILE_OR_FOLDER_INPUT_SAVE , REMOVE_FILE_OR_FOLDER, ACTIVATE_EDITING_FILE, CHANGING_EDITING_FILE} from "./../type/message";


export const update_code = (code) => {
    return dispatch => {
        dispatch({
            type: UPDATE_CODE,
            payload : code
        });
    }
}

export const add_to_filebar = (path) => {
    return dispatch => {
        dispatch({
            type : ADD_TO_FILEBAR,
            payload : path
        });
    }
}

export const remove_from_filebar = (path) => {
    return dispatch => {
        dispatch({
            type : REMOVE_FROM_FILEBAR,
            payload : path
        });
    }
}

export const add_new_file_or_folder = (path) => {
    return dispatch => {
        dispatch({
            type: ADD_NEW_FILE_OR_FOLDER,
            payload : path
        });
    }
}

export const add_new_file_or_folder_input = (path, value) => {
    return dispatch => {
        dispatch({
            type: ADD_NEW_FILE_OR_FOLDER_INPUT,
            payload : path,
            value : value
        })
    }
}

export const add_new_file_or_folder_input_save = (path, folder) => {
    return dispatch => {
        dispatch({
            type: ADD_NEW_FILE_OR_FOLDER_INPUT_SAVE,
            payload: path,
            folder: folder
        })
    }
}

export const remove_file_or_folder = (path) => {
    return dispatch => {
        dispatch({
            type : REMOVE_FILE_OR_FOLDER,
            payload : path
        });
    }
}

export const activate_editing_file = (path) => {
    return dispatch => {
        dispatch({
            type : ACTIVATE_EDITING_FILE,
            payload : path
        })
    }
}

export const changing_editing_file = (value) => {
    return dispatch => {
        dispatch({
            type: CHANGING_EDITING_FILE,
            payload: value
        })
    }
}

