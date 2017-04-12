import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Navbar from '../components/Navbar';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const props = Object.assign({}, this.state);

		return (
			<div>
				<Navbar />
				<div>
				{
		          this.props.children && React.cloneElement(this.props.children, props)
		        }
		        </div>
		 	</div>
		)
	}
	
}
