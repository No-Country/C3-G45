import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "reducers/authReducer";
import { cartReducer } from "reducers/cartReducer";
import { dataReducer } from "reducers/dataReducer";
import { uiReducer } from "reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    data: dataReducer,
    cart: cartReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
); 