import React, { isValidElement } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import App from './App';

function Abb() {
  return <div>1111</div>
}

const Root = () => {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  )
}

ReactDom.render(<Root />, document.querySelector('#root'));