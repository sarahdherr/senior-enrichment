import React, { Component } from 'react';
import axios from 'axios';

import Students from './Students';

// Styling for campus img on campus card. Whenever I move it to the style.css file, it breaks.
const backgroundStyling = ({
	width: '100%', height: '100%', backgroundSize: 'contains'
})

export default (props) => {
	// passed from <CampusContainer />
	const campus = props.selectedCampus;

	return (
		<div className='campus'>
	 		<h2 className='page-title'>{campus.name}</h2>
	 		<div className='single-campus-info'>
		 		<div className='single-campus-img'>
		 			<img style={backgroundStyling} src={campus.imgUrl} />
		 		</div>
		 		<div className='single-campus-text'>
		 			<p>{campus.name} is on star {campus.star}. We currently have {props.students.length} student(s) attending this campus.</p>
		 			<p>We teach courses in Express, Sequelize, React and Redux. The immersive program is 4 light-years long and the part-time program is 20 light-years long.</p>
		 			<p> </p>
		 			<h4>Contact Us</h4>
		 			<p>Email: {campus.email}</p>
		 			<p>Phone: {campus.phone}</p>
		 			<p>Portal Number: {campus.portal}</p>
		 		</div>
		 	</div>
	 		<div className='clearfix'></div>
	 		<h3 className='campus-student-title'>Our Students:</h3>
	 		<Students students={props.students}/>
	 	</div>
	)
}
