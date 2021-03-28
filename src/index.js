import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import App from './App';

const Root = () => {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  )
}

ReactDom.render(<Root />, document.querySelector('#root'));