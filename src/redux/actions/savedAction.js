import {
    SAVED_DATA,
  } from '../types';

  export const saveData = (userDataObj) => {
    return {
      type: SAVED_DATA,
      payload: userDataObj,
    };
  };
