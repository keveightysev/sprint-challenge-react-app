import React from 'react';
import axios from 'axios';

class AddProject extends React.Component {
	state = {
		name: '',
		description: '',
	};

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.post(
				'https://kevins-lssc.herokuapp.com/projects/',
				this.state,
			);
			this.props.updateParent();
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div>
				<h2>Add new Project</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.name}
						name='name'
						onChange={this.handleChanges}
					/>
					<input
						type='text'
						value={this.state.description}
						name='description'
						onChange={this.handleChanges}
					/>
					<button>Add Project</button>
				</form>
			</div>
		);
	}
}

export default AddProject;
