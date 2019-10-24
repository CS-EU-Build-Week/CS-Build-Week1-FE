import * as actions from './actions';

const initialState = {
    rooms: []
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case( actions.GET_ROOMS):
            return {
                ...state,
                rooms: action.payload
            }
        default:
            return state
    }
}