import React, { Component } from 'react';
import { Link } from 'react-router';

const backgroundStyling = ({
	width: '100%', height: '100%', backgroundSize: 'contains'
})

const Students = (props) => {
	function handleDeleteBtn(evt) {
		props.handleDelete(evt.target.value);
	}

	return (
 		<div className='students'>
 			<ul>
 			{
 				props.students.map(student => 
 					<div className='col-xs-3 student-card' key={student.id}>
 						<div className="delete-student">
 							<button className="btn btn-default btn-sm" onClick={handleDeleteBtn} value={student.id}>x</button>
 						</div>
 						<Link to={`/students/${student.id}`}>
 						<img style={backgroundStyling} className='student-img' src={student.imgUrl} />
 						<div className='caption'>
 							<h4>{student.name}</h4>
 							<small>Program: {student.enrolledIn}</small>
 						</div>
 						</Link>
 					</div>
 					
 				)
 			}
 			</ul>
 		</div>
	)
}

export default Students