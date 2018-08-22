import React from 'react'

import data from './data'

class Show extends React.Component {
	componentWillMount() {
		this.setState({
			contact: data.filter(c => c.id == this.props.params.contactId)[0]
		})

	}

	render() {
		return (
			<div id='Show'>
				<h1>{this.state.contact.name}</h1>
			</div>
		);
	}
}

export default Show;