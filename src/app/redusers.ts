import {combineReducers} from 'redux';

// объединяя reducer-ы с помощью combineReducers,
// непосредственно создаём store
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const rootReducer = combineReducers({});

// redux common types
export type RootReducerType = typeof rootReducer


