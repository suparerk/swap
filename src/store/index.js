import { createStore, combineReducers } from 'redux';

let nextWordId = 0;

const word = (state, action) =>{
  switch (action.type) {
    case 'ADD_WORD':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
};

const swapApp = combineReducers({
  word
});

export default createStore(swapApp)