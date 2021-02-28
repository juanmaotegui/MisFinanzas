import React from 'react';
import Navigator from './navigator';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  PURPLE,
  WHITE,
  YELLOW,
  DARKEST_GREY,
  DARK_GREY,
  TURQUOISE,
} from '../colors';

const { store, persistor } = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: TURQUOISE,
    accent: PURPLE,
    background: DARKEST_GREY,
    text: WHITE,
    surface: YELLOW,
    disabled: YELLOW,
    placeholder: WHITE,
    backdrop: YELLOW,
  },
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
