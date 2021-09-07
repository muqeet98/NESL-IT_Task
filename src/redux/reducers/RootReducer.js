import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userdataReducer from './userdataReducer';
import saveReducer from "./saveReducer";


const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
  whitelist: ['userdataReducer'],
};

const rootReducer = combineReducers({
  userdataReducer: userdataReducer,
});

export default persistReducer(persistConfig, rootReducer);
