import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import styles from '../assets/sass/contact.sass'

@observer(['contacts'])
class Contact extends React.Component {

	removeContact = (event) => {
		event.preventDefault();

		this.props.contacts.remove(this.props.id)
	}

	render() {
		return (
			<div className={`${styles.contact} pure-u-1-3`}>
				<h2>
					<Link to={`/contacts/${this.props.id}`}>
						{this.props.name}
					</Link>
				</h2>
				<p>Status: {this.props.status}</p>
				<a 
					href='#' 
					className={`${styles.removeButton} pure-button`} 
					onClick={this.removeContact}
				>
					Remove
				</a>
			</div>
		);
	}
}

export default Contact;