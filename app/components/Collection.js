import React from 'react';
import { observer} from 'mobx-react';
import styles from '../assets/sass/collection.sass'
import Post from './Post'

@observer(['posts'])
class Collection extends React.Component {
	
	componentWillMount() {
		this.props.posts.fetchAll();
	}

	render() {
		return(
			<div id='Collection' className={styles.main}>
				{this.newPost()}
				<div className='pure-g'>
					{
						this.props.posts.all.slice().map(
							store => <Post key={store.id} {...store} />
						)
					}
				</div>
			</div>
		);
	}

	/* Arrow Functions */	
	
	newPost = () =>
		<div className='pure-g'> 
			<div className='pure-u-12-24'>
				<form className='pure-form' onSubmit={this.addPost}>
					<fieldset>
						<legend>New Post</legend>

						<input ref='name'   type='text' placeholder='Some Name' />
						<input ref='status' type='text' placeholder='Person?' />

						<button type='submit' className='pure-button pure-button-primary'>Add</button>
					</fieldset>
				</form>
			</div>
		</div>;

	addPost = (event) => {
		event.preventDefault();

		const posts = this.props.posts.all.slice();
		const newId = posts[posts.length - 1].id + 1;

		this.props.posts.add({
			id: newId,
			name: this.refs.name.value, 
			status: this.refs.status.value
		});

		this.refs.name.value = null;
		this.refs.status.value = null;
	}

}

export default Collection;