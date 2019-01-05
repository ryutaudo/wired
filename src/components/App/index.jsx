import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import Body from './Body';

setConfig({ pureSFC: true });

const App = () => (
  <div className="App">
    <Body />
  </div>
);

export default hot(App);
