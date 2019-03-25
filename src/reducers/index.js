import * as types from './../type/message';

const initialState = {
    old : {
        userdata : [],
        packdata : [], 
        marketdata : [],
    },
    new : {
        userdata : [],
        packdata : [], 
        marketdata : [],
    },
    isloading : false,
};

export default (state=initialState, action) => {
    switch (action.type) {
        case types.UPDATE_USER_DATA:
        {
            const newState = {...state};
            const value = [...action.value];
            for(var i=0; i<value.length; i++) {
                value[i]["red"]=true;
            }
            const old = [...newState.new.userdata];
            newState.old.userdata = old;
            for(var i=0; i<value.length; i++) {
                for(var j=0; j<old.length; j++) {
                    if(value[i].userId === old[j].userId) {
                        value[i].red = false;
                        if(value[i].ownedCards.length !== old[j].ownedCards.length) {
                            value[i].red = true;
                        }
                        if(value[i].ownedPacks.length !== old[j].ownedPacks.length) {
                            value[i].red = true;
                        }
                        if(value[i].ownedCardsCount !== old[j].ownedCardsCount) {
                            value[i].red = true;
                        }
                        if(value[i].ownedPacksCount !== old[j].ownedPacksCount) {
                            value[i].red = true;
                        }
                    }
                }
            }
            newState.new.userdata = value;
            return newState
        }
        case types.UPDATE_PACK_DATA:
        {
            const newState = {...state};
            const value = [...action.value];
            for(var i=0; i<value.length; i++) {
                value[i]["red"]=true;
            }
            const old = [...newState.new.packdata];
            newState.old.packdata = old;
            for(var i=0; i<value.length; i++) {
                for(var j=0; j<old.length; j++) {
                    if(value[i].packId === old[j].packId) {
                        value[i].red = false;
                        if(value[i].populatedCards.length !== old[j].populatedCards.length) {
                            value[i].red = true;
                        }
                    }
                }
            }
            newState.new.packdata = value;
            return newState
        }
        case types.UPDATE_MARKET_DATA:
        {
            const newState = {...state};
            const value = [...action.value];
            for(var i=0; i<value.length; i++) {
                value[i]["red"]=true;
            }
            const old = [...newState.new.marketdata];
            newState.old.marketdata = old;
            for(var i=0; i<value.length; i++) {
                for(var j=0; j<old.length; j++) {
                    if(value[i].userId === old[j].userId) {
                        value[i].red = false;
                    }
                }
            }
            newState.new.marketdata = value;
            return newState
        }
        default:
        {
            return state;
        }
    }
}