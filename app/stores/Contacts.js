import { observable, action } from 'mobx';

class Contacts {
	@observable all = [
		{ id: 1, name: 'Jacobi', status: 'human'},
		{ id: 2, name: 'Mer',    status: 'human'},
		{ id: 3, name: 'Eve',    status: 'kitty'}
	];

	@action add(data) {
		const existing = this.all;
		this.all = existing.concat(data);
	}

	@action find(contactId){
		return (
			this.all.slice().filter(
				c => c.id == contactId
			)[0]
		)
	}

	@action remove(contactId) {
		const existing = this.all;
		this.all = existing.filter(
			c => c.id !== contactId
		);
	}
}

export default new Contacts();