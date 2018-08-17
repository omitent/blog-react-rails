import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Layout from './components/Layout'

export default () => (
	<Route path='/' component={Layout} />
)