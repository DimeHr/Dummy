import { LOGIN_SUCCESS } from 'constants/actionConstants';

export const loginUser = () => ({
    type: LOGIN_SUCCESS,
    payload: { isLoggedIn: true },
});