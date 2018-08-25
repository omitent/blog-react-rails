import React from 'react';
import { observer} from 'mobx-react';
import styles from '../assets/sass/collection.sass'
import Contact from './Contact'

@observer(['contacts'])
class Collection extends React.Component {
	
	render() {
		return(
			<div id='Collection' className={styles.main}>
				{this.newContact()}
				<div className='pure-g'>
					{
						this.props.contacts.all.slice().map(
							store => <Contact key={store.id} {...store} />
						)
					}
				</div>
			</div>
		);
	}

	/* Arrow Functions */	
	
	newContact = () =>
		<div className='pure-g'> 
			<div className='pure-u-12-24'>
				<form className='pure-form' onSubmit={this.addContact}>
					<fieldset>
						<legend>New Contact</legend>

						<input ref='name'   type='text' placeholder='Some Name' />
						<input ref='status' type='text' placeholder='Person?' />

						<button type='submit' className='pure-button pure-button-primary'>Add</button>
					</fieldset>
				</form>
			</div>
		</div>;

	addContact = (event) => {
		event.preventDefault();

		const contacts = this.props.contacts.all.slice();
		const newId = contacts[contacts.length - 1].id + 1;

		this.props.contacts.add({
			id: newId,
			name: this.refs.name.value, 
			status: this.refs.status.value
		});

		this.refs.name.value = null;
		this.refs.status.value = null;
	}

}

export default Collection;