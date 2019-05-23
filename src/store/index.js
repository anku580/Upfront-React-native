import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = () => {
    form: formReducer
}
export default store = createStore(rootReducer);    