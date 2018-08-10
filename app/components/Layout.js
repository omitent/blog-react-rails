import React from 'react';

import Contact from './contact'
import data from './data'

class Layout extends React.Component {
	
	render() {
		return(
			<div id='Layout'>
				{this.newContact()}
				<div className='pure-g'>
					{
						this.state.contacts.map(
							stuff => <Contact key={stuff.id} {...stuff} />
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

		const contacts = this.state.contacts;
		const newId = contacts[contacts.length - 1].id + 1;

		this.setState({
			contacts: contacts.concat({ 
				id: newId, 
				name: this.refs.name.value, 
				status: this.refs.status.value
			})
		})
		this.refs.name.value = null;
		this.refs.status.value = null;

	}
	/*Not Arrow Functions */
	componentWillMount() {
		this.setState({
			contacts: data,
		});
	}

}

export default Layout;