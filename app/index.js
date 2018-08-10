import 'purecss/build/pure.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Routes from './routes';

import Layout from './components/Layout';

ReactDOM.render(
	<Routes/>,
	document.getElementById('app')
);