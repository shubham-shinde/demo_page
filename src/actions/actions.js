import * as types from "./../type/message";

export const add_to_filebar = (path) => {
    return dispatch => {
        dispatch({
            type : types.ADD_TO_FILEBAR,
            payload : path
        });
    }
}

export const remove_from_filebar = (path) => {
    return dispatch => {
        dispatch({
            type : types.REMOVE_FROM_FILEBAR,
            payload : path
        });
    }
}

export const add_new_file_or_folder = (path) => {
    return dispatch => {
        dispatch({
            type : types.ADD_NEW_FILE_OR_FOLDER,
            payload : path
        });
    }
}

export const add_new_file_or_folder_input = (path, value) => {
    return dispatch => {
        dispatch({
            type : types.ADD_NEW_FILE_OR_FOLDER_INPUT,
            payload : path,
            value : value
        })
    }
}

export const add_new_file_or_folder_input_save = (path, folder) => {
    return dispatch => {
        dispatch({
            type : types.ADD_NEW_FILE_OR_FOLDER_INPUT_SAVE,
            payload: path,
            folder: folder
        })
    }
}

export const remove_file_or_folder = (path) => {
    return dispatch => {
        dispatch({
            type : types.REMOVE_FILE_OR_FOLDER,
            payload : path
        });
    }
}

export const activate_editing_file = (path) => {
    return dispatch => {
        dispatch({
            type : types.ACTIVATE_EDITING_FILE,
            payload : path
        })
    }
}

export const changing_editing_file = (value) => {
    console.log(value);
    return dispatch => {
        dispatch({
            type : types.CHANGING_EDITING_FILE,
            payload: value
        })
    }
}

