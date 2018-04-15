import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import { ipcRenderer } from 'electron';
import { loadFile } from './actions/counter';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

ipcRenderer.on('open-file', (event, filenames) => {
  // TODO: Try to dispatch an action here.
  // Dispatch an increment event.
  // store.dispatch({ type: 'OPEN_FILE', filenames });
  // console.log('files:', filenames);
  // store.dispatch({
  //   type: 'INCREMENT_COUNTER'
  // });
  console.log('filenames:', filenames);
  loadFile(filenames[0])(store.dispatch);
});