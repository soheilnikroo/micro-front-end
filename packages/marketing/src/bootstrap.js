import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing_dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
