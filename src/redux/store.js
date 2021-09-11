import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import componentReducer from './contacts/contacts-reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authSlice from './auth/auth-slice';

// const myMiddleware = store => next => action => {
//   console.log('My middleware');
//   console.log(action);
//   console.log(store.getState());
// };
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice),
  contacts: componentReducer.contactsReducer,
  filter: componentReducer.filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // myMiddleware,
  ],
});

let persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// eslint-disable-next-line import/no-anonymous-default-export
// export default store;

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const reducer = combineReducers({
//   contacts: componentReducer.contactsReducer,
//   filter: componentReducer.filterReducer,
// });
// const store = createStore(reducer, composeWithDevTools());

//todo
// import { combineReducers, applyMiddleware } from 'redux';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import componentReducer from './contacts/contacts-reducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   contacts: componentReducer.contactsReducer,
//   filter: componentReducer.filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// const persistor = persistStore(store);
// // eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };
