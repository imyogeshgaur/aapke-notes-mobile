import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import AppRoutes from './src/Routes/AppRoutes';
const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};
export default App;
