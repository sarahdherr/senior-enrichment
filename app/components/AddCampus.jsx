import React from 'react';
import axios from 'axios';

import store from '../store';
import { getCampuses } from '../action-creators/campuses';
import { generateRandomPortal, generateRandomPlanet } from './DUMMY_DATA'; //TODO!!!!!!!

export default class AddCampus extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			star: '',
			imgUrl: '',
			email: '',
			phone: '',
			portal: ''
		}

		// vv bind local functions here vv
		this.handleName = this.handleName.bind(this);
		this.handleStar = this.handleStar.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePhone = this.handlePhone.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleName(evt) {
		evt.preventDefault()
		this.setState({
			name: evt.target.value
		})
	}

	// more handle functions go here
	handleStar(evt) {
		evt.preventDefault()
		this.setState({
			star: evt.target.value
		})
	}

	handleEmail(evt) {
		evt.preventDefault()
		this.setState({
			email: evt.target.value
		})
	}

	handlePhone(evt) {
		evt.preventDefault()
		this.setState({
			phone: evt.target.value
		})
	}

	handleSubmit(evt) {
		evt.preventDefault()
		const campusObj = this.state;
		
		campusObj.portal = generateRandomPortal();
		campusObj.imgUrl = generateRandomPlanet();

		axios.post(`/api/campuses`, campusObj)
			.then(() => store.dispatch(getCampuses()))
			.then(() => window.location.reload())
	}

	render() {
		return (
			<form className='form-group add-student-form' style={{marginTop: '1%', marginLeft: '18%', marginRight: '13%'}} onSubmit={this.handleSubmit}>
		        <label>Name:</label>
		        <input  onChange={this.handleName} className='form-control' placeholder="Campus name" />
		        
		        <label style={{marginTop: '2%'}}>Star:</label>
		        <input onChange={this.handleStar} className='form-control' placeholder="Star campus is on" />
		        
		        <label style={{marginTop: '2%'}}>Email:</label>
		        <input onChange={this.handleEmail} className='form-control' placeholder="Campus email" />
		        
		        
		        <label style={{marginTop: '2%'}}>Phone:</label>
		        <input onChange={this.handlePhone} className='form-control' placeholder="Campus phone" />
		        
		        <button className="btn add-student-submit" type="submit">Add Campus</button>
		      </form>
		)
	}

}