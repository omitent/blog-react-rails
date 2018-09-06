import { observable, action } from 'mobx';

class Posts {
	@observable all = [	];

	@observable isLoading = false;

	// interfaces with api endpoint
	@action async fetchAll() {
		const response = await fetch('http://localhost:3000/v1/post/all');
		const status = await response.status;

		if (status === 200) {
			this.all = response.json();
		}
	}

	@action add(data) {
		const existing = this.all;
		this.all = existing.concat(data);
	}

	@action find(postId){
		return (
			this.all.slice().filter(
				c => c.id == postId
			)[0]
		)
	}

	@action remove(postId) {
		const existing = this.all;
		this.all = existing.filter(
			c => c.id !== postId
		);
	}
}

export default new Posts();