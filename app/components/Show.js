import React from 'react'
import { observer } from 'mobx-react';

@observer(['posts'])

class Show extends React.Component {
	componentWillMount() {
		const post = this.props.posts.find(this.props.params.postId);
		this.setState({ post })

	}

	render() {
		return (
			<div id='Show'>
				<h1>{this.state.post.name}</h1>
				<p>{this.state.post.status}</p>
			</div>
		);
	}
}

export default Show;