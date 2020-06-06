import React from 'react';
import { render } from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import Context from './Context';


render(<Context.Provider><GlobalStyles /><App /></Context.Provider>, document.querySelector('#app'));