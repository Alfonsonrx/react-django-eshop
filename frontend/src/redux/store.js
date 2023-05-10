import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import cartReducer from './cartSlice';
import detailReducer from './productDetailSlice';

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['prodDetail']
  }

const rootReducer = combineReducers({ 
  prodDetail: detailReducer,
  cart: cartReducer, 
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)