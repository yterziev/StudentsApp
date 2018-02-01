import { applyMiddleware, createStore, combineReducers } from 'redux';

import reducer from './reducer';

const devTools = () => {
    return window.devToolsExtension ? window.devToolsExtension({
        serialize: true,
        actionSanitizer: (action) => {
            if (typeof action.type === 'symbol') {
                // Return a copy of the action with stringified action type
                return Object.assign({}, action, {
                    type: action.type.toString()
                });
            }

            return action;
        }
    }) : f => f;
};

export default createStore(reducer, devTools());