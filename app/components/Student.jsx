import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router';
import axios from 'axios';

const backgroundStyling = ({
	width: '100%', height: '100%', backgroundSize: 'contains'
})

export default function Student (props) {
	const student = props.selectedStudent;
	const campus = props.selectedCampus;

	return (
		<div>
		{student && campus ? 
		(<div className='student'>
	 		<h2 className='page-title'>{student.name}</h2>
	 		<div className='single-student-info'>
		 		<div className='single-student-img'>
		 			<img style={backgroundStyling} src={student.imgUrl} />
		 		</div>
		 		<div className='single-student-text'>
		 			<div className='student-text-left'>
			 			<h4>Contact {student.name}:</h4>
			 			<p>Email: {student.email}</p>
			 			<p>Phone: {student.phone}</p>
			 			<p>GitHub: {student.github}</p>
			 			
			 		</div>

			 		<div className='student-text-right'>
			 			<div className='student-campus-img'>
			 				<Link to={`/campuses/${campus.id}`}><img className='campus-img' src={campus.imgUrl} /></Link>
			 			</div>
			 			<p>{student.name} goes to Hamilton Academy at the {campus.name} campus. {student.name} is in the {student.enrolledIn} program.</p>
			 			<p>She is taking courses in React, Redux, Sequelize and Express.</p>
			 		</div>
		 		</div>
		 	</div>
	 	</div>) : (<div></div>)}
	 	</div>
	)
	
}
