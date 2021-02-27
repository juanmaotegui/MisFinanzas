import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const componeEnhancers = compose;

export default () => {
  const store = createStore(
    persistedReducer,
    componeEnhancers(applyMiddleware(thunk)),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
