import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import styles from '../assets/sass/post.sass'

@observer(['posts'])
class Post extends React.Component {

	removePost = (event) => {
		event.preventDefault();

		this.props.posts.remove(this.props.id)
	}

	render() {
		return (
			<div className={`${styles.post} pure-u-1-3`}>
				<h2>
					<Link to={`/posts/${this.props.id}`}>
						{this.props.name}
					</Link>
				</h2>
				<p>Status: {this.props.status}</p>
				<a 
					href='#' 
					className={`${styles.removeButton} pure-button`} 
					onClick={this.removePost}
				>
					Remove
				</a>
			</div>
		);
	}
}

export default Post;