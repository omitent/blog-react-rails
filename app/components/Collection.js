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

						<input ref='title'       type='text' placeholder='Some Title' />
						<input ref='body'        type='text' placeholder='Text' />

						<button type='submit' className='pure-button pure-button-primary'>Add</button>
					</fieldset>
				</form>
			</div>
		</div>;

	addPost = (event) => {
		event.preventDefault();

		const posts = this.props.posts.all.slice();

		this.props.posts.add({
			title: this.refs.title.value, 
			body: this.refs.body.value
		});

		this.refs.title.value = null;
		this.refs.body.value = null;
	}

}

export default Collection;