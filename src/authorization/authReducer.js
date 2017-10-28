import { LOGIN_SUCCESS } from '../constants/actionConstants';

export default function ( state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}
