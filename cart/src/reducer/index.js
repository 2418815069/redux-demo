import { combineReducers } from 'redux';
import  counter from './counter';
import  cart from './cart';
const Reducers= combineReducers({
    counter,
    cart
});
export default Reducers