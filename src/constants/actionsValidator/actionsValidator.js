const ACTION_TYPES = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const actionTypeValidator = {
    get(obj, prop) {
        if (obj[prop]) {
            return prop;
        } else {
            throw new TypeError(`${prop} is not a valid action type`);
        }
    }
};

module.exports = new Proxy(ACTION_TYPES, actionTypeValidator);