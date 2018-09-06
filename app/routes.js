import React from 'react'

import {
  Route,
  Redirect,
  IndexRoute
} from 'react-router'

import c from './components';

const routes = 
	<Route>
		<Redirect from='/' to='/posts' />
		<Route path='posts' component={c.Layout}>
			<IndexRoute component={c.Collection} />
			<Route path=':postId' component={c.Show} />
		</Route>
	</Route>;

export default routes;