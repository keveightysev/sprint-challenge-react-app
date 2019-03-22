import React from 'react';
import axios from 'axios';
import ActionsList from './components/ActionsList';
import AddProject from './components/AddProject';

class App extends React.Component {
	state = {
		projects: [],
	};

	async componentDidMount() {
		try {
			const res = await axios.get('https://kevins-lssc.herokuapp.com/projects');
			this.setState({ projects: res.data });
		} catch (err) {
			console.log(err);
		}
	}

	updateParent = async () => {
		try {
			const res = await axios.get('https://kevins-lssc.herokuapp.com/projects');
			this.setState({ projects: res.data });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className='App'>
				<h1>Projects</h1>
				{this.state.projects.map(project => (
					<div key={project.id}>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
						<ActionsList id={project.id} />
					</div>
				))}
				<AddProject updateParent={this.updateParent} />
			</div>
		);
	}
}

export default App;
