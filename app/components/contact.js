import React from 'react';

const Contact = props =>
	<div className='pure-u-1-3'>
		<h2>{props.name}</h2>
		<p>Status: {props.status}</p>
	</div>;

export default Contact;