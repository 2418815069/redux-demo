import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { crfReducer } from './crfreducer';

export default combineReducers({
  form: reduxFormReducer,
  crfReducer,
});
