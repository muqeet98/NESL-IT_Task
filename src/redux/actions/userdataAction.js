import {
  USER_DATA,
} from '../types';

export const userData = (userDataObj) => {
  return {
    type: USER_DATA,
    payload: userDataObj,
  };
};
