import React from 'react';
import { connect } from 'react-redux';

import Campuses from '../components/Campuses';
import AddCampus from '../components/AddCampus';

class CampusesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addCampus: false
		}

		this.handleAddButton = this.handleAddButton.bind(this);
	}

	// function to toggle if the form is displayed based on clicking the add button
	handleAddButton(evt) {
		this.setState({
			addCampus: !this.state.addCampus
		})
	}

	render() {
		return (
			<div className='campuses'>
				<h2 className='page-title'>Our Campuses</h2>

				<div className='students-buttons'>
		        	<div className='add-student-button' onClick={this.handleAddButton}><img className='add-student-img' src='http://downloadicons.net/sites/default/files/add-icon-76240.png' /></div>
		        </div>

		        {this.state.addCampus ? 
		        	(<div>
		              <AddCampus />
		            </div>
		             ) : (
		            <div></div>)
		        }

		        <div className='clearfix' />
          		<Campuses campuses={this.props.campuses} />
        
			</div>
		)
	}
}

// Adds list of campuses to the <CampusesContainer /> props
const mapStateToProps = (state) => {
	return {
		campuses: state.campuses.list
	}
}

export default connect(mapStateToProps)(CampusesContainer);