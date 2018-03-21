import * as types from './../type/message';

const initialState = {
    title : 'Your react Redux Environment is Ready'
};

export default (state=initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_ON_CLICK:
        {
            return (state.title === 'Your react Redux Environment is Ready') ? {title: 'Start your new react projext'}: {title: 'Your react Redux Environment is Ready'};
        }
            
            break;
    
        default:
        {
            return state;
        }
            break;
    }
}