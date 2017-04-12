import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

// Styling for campus img. Whenever I move it to the style.css file, it breaks.
const backgroundStyling = ({
	width: '100%', height: '100%', backgroundSize: 'contains'
})

export default (props) => {
	// passed from <CampusesContainer />
	const campuses = props.campuses

	// when delete button is clicked, the campus is deleted from the db through the express route. Then reloads page
	function handleDeleteBtn(evt) {
		const campusId = evt.target.value;
		axios.delete(`/api/campuses/${campusId}`)
			.then(() => window.location.reload())
	}

	return (
		<div className='campuses'>
	 		<div className='row'>
	 			{
	 				campuses && campuses.map(campus => (
	 					<div className='col-xs-3 campus-card' key={campus.id}>
		 					<div className="delete-student">
	 							<button className="btn btn-default btn-sm" onClick={handleDeleteBtn} value={campus.id}>x</button>
	 						</div>
	 						<Link to={`/campuses/${campus.id}`}>
	 						<img style={backgroundStyling} className='campus-img' src={campus.imgUrl} />
	 						<div className='caption'>
	 							<h4>{campus.name}</h4>
	 							<small>Star: {campus.star}</small>
	 						</div>
	 						</Link>
	 					</div>
	 				))
	 			}
	 		</div>
	 	</div>
	)
}
