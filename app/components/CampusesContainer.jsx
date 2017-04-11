import React from 'react';
import Campuses from './Campuses';
import { connect } from 'react-redux';
import AddCampus from './AddCampus';

class CampusesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addCampus: false
		}

		this.handleAddButton = this.handleAddButton.bind(this);
	}

	handleAddButton(evt) {
		console.log(this.state)
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

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses.list
	}
}

export default connect(mapStateToProps)(CampusesContainer);