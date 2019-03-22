import React from 'react';
import axios from 'axios';

class ActionsList extends React.Component {
	state = {
		actions: [],
	};

	async componentDidMount() {
		try {
			const res = await axios.get(
				`https://kevins-lssc.herokuapp.com/projects/${this.props.id}/actions`,
			);
			this.setState({ actions: res.data });
		} catch (err) {
			if (err.message.includes('422')) {
				this.setState({
					actions: [
						{
							id: null,
							description: 'There are no actions for this project',
							notes: 'There are no notes for this project',
						},
					],
				});
			} else {
				console.log(err.message);
			}
		}
	}

	render() {
		return (
			<ul>
				{this.state.actions.map(action => (
					<li key={action.id}>
						<ul>
							<li>
								<strong>Description:</strong> {action.description}
							</li>
							<li>
								<strong>Notes:</strong> {action.notes}
							</li>
						</ul>
					</li>
				))}
			</ul>
		);
	}
}

export default ActionsList;
