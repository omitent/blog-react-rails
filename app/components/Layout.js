import React from 'react';

const data = [
	{ name: 'Jacobi', status: 'human'},
	{ name: 'Mer',    status: 'human'},
	{ name: 'Eve',    status: 'kitty'}
];

const Contact = props =>
	<div className='pure-u-1-3'>
		<h2>{props.name}</h2>
		<p>Status: {props.status}</p>
	</div>;

class Layout extends React.Component {
	render() {
		return(
			<div id='Layout' className='pure-g'>
				{data.map(stuff =>
					<Contact {...stuff} />
				)}
				<div className='pure-u-1-3'><h2>Hello from React!</h2></div>
				<div className='pure-u-1-3'><h2>Second Purecss</h2></div>
			</div>
		);
	}
}

export default Layout;