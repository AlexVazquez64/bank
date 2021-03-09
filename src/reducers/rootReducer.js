import { combineReducers } from 'redux';

import { bankReducer } from './bankReducer';


export const rootReducer = combineReducers({

  bankReducer: bankReducer,
  
  // TODO SETUP REDUCER
});