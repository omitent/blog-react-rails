import { observable, action } from 'mobx';

class Posts {
	@observable all = [	];

	@observable isLoading = false;

	// interfaces with api endpoint
	@action async fetchAll() {
		const response = await fetch('http://localhost:3000/v1/post/all');
		const status = await response.status;

		if (status === 200) {
			this.all = await response.json();
		}
	}

	@action async add(data) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const options = {
			method: 'POST',
			headers, 
			body: JSON.stringify(data),
		}
		console.log(options);
		const request = new Request('http://localhost:3000/v1/category/1/post/', options);
		const response = await fetch(request);
		const status = await response.status;

		if (status === 201){
			this.fetchAll();
		}
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