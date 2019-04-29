import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import demoReducer from './reducers/demo';

const store = createStore(
    combineReducers({
        form: formReducer,
        demo: demoReducer,
    }),
    applyMiddleware(thunk)  // ajax handling
);

export default store;
