import * as types from '../type/message';
import API from '../API/index';
var api = API();

export const toggleAction = () => ({
    type : types.TOGGLE_ON_CLICK
})

export const updateUser = (data) => ({
    type : types.UPDATE_USER_DATA,
    value : data
})

export const updatePack = (data) => ({
    type : types.UPDATE_PACK_DATA,
    value : data
})

export const updateMarket = (data) => ({
    type : types.UPDATE_MARKET_DATA,
    value : data
})

export const updateData = () => (dispatch) => {
    api.get(`/table/users`).then(d => dispatch(updateUser(d.data)))
    api.get(`/table/packs`).then(d => dispatch(updatePack(d.data)))
    api.get(`/table/sellords`).then(d => dispatch(updateMarket(d.data)))
}