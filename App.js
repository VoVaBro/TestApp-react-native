import React from 'react';

import { Provider } from 'react-redux'
import { store } from './redusers/store'
import { PhotoProvider } from './context/PhotoContext'


import AppNavigator from './navigation/AppNavigator'


export default function App() {
  return (
    <Provider store={store}>
      <PhotoProvider>

        <AppNavigator />

      </PhotoProvider>
    </Provider>
  );
}
