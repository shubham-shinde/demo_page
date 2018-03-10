import {ADD_TO_FILEBAR, REMOVE_FROM_FILEBAR} from './../type/message';
const initial_state = [];


export default (state= initial_state, action) => {
    switch (action.type) {
        case ADD_TO_FILEBAR:
        {
            let a = false;
            for(var i=0;i<state.length; i++) {
                if(action.payload.equals(state[i])) {
                    a = true;
                    break;
                }
            }
            console.log([...state,action.payload]);
            if (!a) {
                return [...state,action.payload];  
            } 
            else {
                return state;
            }         
            break;
        }
        case REMOVE_FROM_FILEBAR:
        {
            const newState = [...state];
            const index = Number(newState.indexOf(action.payload));
            return [...newState.slice(0,index),...newState.slice(index+1,)];
            break;
        }
        default:
            return state;
            break;
    }
}