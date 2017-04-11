import React, { Component } from 'react';
import Navbar from './Navbar';
import Campuses from './Campuses';
import { hashHistory } from 'react-router';

import {DUMMY_CAMPUSES, DUMMY_CAMPUS, DUMMY_STUDENTS, DUMMY_STUDENT} from './DUMMY_DATA'

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		const props = Object.assign({}, this.state, {
			// students: DUMMY_STUDENTS,
			// selectCampus: this.selectCampus,
			// selectStudent: this.selectStudent
		});

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
