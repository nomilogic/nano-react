import {combineReducers} from 'redux';
import albumReducer from './albumReducer';
import loginReducer from './loginReducer';
const rootReducers = combineReducers({
  albumReducer,
  loginReducer,
});

export default rootReducers;
