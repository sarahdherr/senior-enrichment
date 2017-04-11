import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const backgroundStyling = ({
	width: '100%', height: '100%', backgroundSize: 'contains'
})

const Campuses = (props) => {
	function handleDeleteBtn(evt) {
		const campusId = evt.target.value;
		axios.delete(`/api/campuses/${campusId}`)
			.then(() => window.location.reload())
	}

	return (
		<div className='campuses'>
	 		<div className='row'>
	 			{
	 				props.campuses && props.campuses.map(campus => (
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

export default Campuses