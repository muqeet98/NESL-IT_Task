import {
    OBJ_DATA,
  } from '../types';

  export const objectData = (userObj) => {
    return {
      type: OBJ_DATA,
      payload: userObj,
    };
  };
