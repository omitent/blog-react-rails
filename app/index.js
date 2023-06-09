import 'purecss/build/pure.css'

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';

import { Provider } from 'mobx-react';

import routes from './routes';
import stores from './stores';

ReactDOM.render(
	<Provider posts={stores.posts}>
		<Router routes={routes} history={browserHistory} />
	</Provider>,
	document.getElementById('app')
);