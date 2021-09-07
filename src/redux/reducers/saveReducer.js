import {
    SAVED_DATA,
  } from '../types';

  const initState = {
    savedData: [],
  };

  const saveReducer = (state = initState, action) => {
    switch (action.type) {
      case SAVED_DATA:
        return {
          ...state,
          savedData: action.payload,
        };

      default:
        return state;
    }
  };

  export default saveReducer;
