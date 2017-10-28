import { combineReducers } from 'redux';
import authReducer from 'authorization/authReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    // todos: todosReducer,
});

export default rootReducer;
