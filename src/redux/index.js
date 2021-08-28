import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import userReducer from './Users/reducers';

const rootReducers = combineReducers({user: userReducer});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export {store, persistor};
